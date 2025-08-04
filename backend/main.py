from fastapi import FastAPI, HTTPException, BackgroundTasks, Request
from fastapi.middleware.cors import CORSMiddleware
from fastapi.responses import JSONResponse
from pydantic import BaseModel, EmailStr
from typing import List, Optional
import smtplib
from email.mime.text import MIMEText
from email.mime.multipart import MIMEMultipart
import json
import os
from datetime import datetime
import logging

# Setup logging
logging.basicConfig(level=logging.INFO)
logger = logging.getLogger(__name__)

app = FastAPI(
    title="Portfolio API",
    description="API for portfolio website with contact form and analytics",
    version="1.0.0"
)

# CORS middleware
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],  # Allow all origins for development
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# Pydantic models
class ContactForm(BaseModel):
    name: str
    email: EmailStr
    subject: str
    message: str

class ProjectView(BaseModel):
    project_id: str
    timestamp: datetime = datetime.now()

class SkillInteraction(BaseModel):
    skill_name: str
    interaction_type: str  # "hover", "click"
    timestamp: datetime = datetime.now()

class DownloadRequest(BaseModel):
    file_type: str  # "cv", "portfolio"
    language: str   # "en", "vi"

# In-memory storage (for demo - replace with database in production)
contacts = []
analytics = {
    "page_views": {},
    "project_views": [],
    "skill_interactions": [],
    "downloads": []
}

@app.get("/")
async def root():
    return {"message": "Portfolio API is running!"}

@app.post("/api/contact")
async def submit_contact_form(form: ContactForm):
    """Submit contact form and send email notification"""
    try:
        # Add timestamp
        contact_data = {
            **form.model_dump(),
            "timestamp": datetime.now().isoformat(),
            "id": len(contacts) + 1
        }
        
        # Store contact
        contacts.append(contact_data)
        
        # Send email notification
        await send_email_notification(form)
        
        logger.info(f"New contact form submission from {form.email}")
        
        return JSONResponse(
            status_code=200,
            content={
                "success": True,
                "message": "Cảm ơn bạn đã liên hệ! Tôi sẽ phản hồi sớm nhất có thể.",
                "message_en": "Thank you for your message! I'll get back to you as soon as possible."
            }
        )
    except Exception as e:
        logger.error(f"Error processing contact form: {str(e)}")
        raise HTTPException(
            status_code=500,
            detail="Có lỗi xảy ra khi gửi thông tin. Vui lòng thử lại sau."
        )

async def send_email_notification(form: ContactForm):
    """Send email notification (configure SMTP settings)"""
    try:
        # Email configuration (add your SMTP settings)
        SMTP_SERVER = os.getenv("SMTP_SERVER", "smtp.gmail.com")
        SMTP_PORT = int(os.getenv("SMTP_PORT", "587"))
        EMAIL_USER = os.getenv("EMAIL_USER", "your-email@gmail.com")
        EMAIL_PASSWORD = os.getenv("EMAIL_PASSWORD", "your-app-password")
        
        if not all([EMAIL_USER, EMAIL_PASSWORD]):
            logger.warning("Email credentials not configured")
            return
        
        msg = MIMEMultipart()
        msg['From'] = EMAIL_USER
        msg['To'] = EMAIL_USER  # Send to yourself
        msg['Subject'] = f"New Contact Form: {form.subject}"
        
        body = f"""
        New contact form submission:
        
        Name: {form.name}
        Email: {form.email}
        Subject: {form.subject}
        
        Message:
        {form.message}
        
        Submitted at: {datetime.now().strftime('%Y-%m-%d %H:%M:%S')}
        """
        
        msg.attach(MIMEText(body, 'plain'))
        
        server = smtplib.SMTP(SMTP_SERVER, SMTP_PORT)
        server.starttls()
        server.login(EMAIL_USER, EMAIL_PASSWORD)
        text = msg.as_string()
        server.sendmail(EMAIL_USER, EMAIL_USER, text)
        server.quit()
        
        logger.info("Email notification sent successfully")
        
    except Exception as e:
        logger.error(f"Failed to send email: {str(e)}")

@app.get("/api/contacts")
async def get_contacts():
    """Get all contacts (admin only - add authentication in production)"""
    return {"contacts": contacts, "total": len(contacts)}

@app.post("/api/analytics/page-view")
async def track_page_view(request: Request):
    """Track page views for analytics"""
    try:
        body = await request.body()
        page = body.decode('utf-8').strip('"')  # Remove quotes from JSON string
        
        if page not in analytics["page_views"]:
            analytics["page_views"][page] = 0
        analytics["page_views"][page] += 1
        
        return {"success": True, "page": page}
    except Exception as e:
        logger.error(f"Analytics tracking error: {str(e)}")
        return {"success": False, "error": str(e)}

@app.post("/api/analytics/project-view")
async def track_project_view(project_view: ProjectView):
    """Track project views"""
    analytics["project_views"].append(project_view.dict())
    return {"success": True}

@app.post("/api/analytics/skill-interaction")
async def track_skill_interaction(skill: SkillInteraction):
    """Track skill interactions"""
    analytics["skill_interactions"].append(skill.dict())
    return {"success": True}

@app.post("/api/download")
async def track_download(download: DownloadRequest):
    """Track file downloads (CV, portfolio, etc.)"""
    analytics["downloads"].append({
        **download.dict(),
        "timestamp": datetime.now().isoformat()
    })
    
    # Return download URL or file path
    file_urls = {
        "cv": {
            "en": "/files/cv-en.pdf",
            "vi": "/files/cv-vi.pdf"
        },
        "portfolio": {
            "en": "/files/portfolio-en.pdf", 
            "vi": "/files/portfolio-vi.pdf"
        }
    }
    
    if download.file_type in file_urls and download.language in file_urls[download.file_type]:
        return {
            "success": True,
            "download_url": file_urls[download.file_type][download.language]
        }
    
    raise HTTPException(status_code=404, detail="File not found")

@app.get("/api/analytics")
async def get_analytics():
    """Get analytics data (admin only)"""
    return {
        "page_views": analytics["page_views"],
        "total_contacts": len(contacts),
        "total_project_views": len(analytics["project_views"]),
        "total_skill_interactions": len(analytics["skill_interactions"]),
        "total_downloads": len(analytics["downloads"]),
        "popular_projects": get_popular_projects(),
        "popular_skills": get_popular_skills()
    }

def get_popular_projects():
    """Get most viewed projects"""
    project_counts = {}
    for view in analytics["project_views"]:
        project_id = view["project_id"]
        project_counts[project_id] = project_counts.get(project_id, 0) + 1
    
    return sorted(project_counts.items(), key=lambda x: x[1], reverse=True)[:5]

def get_popular_skills():
    """Get most interacted skills"""
    skill_counts = {}
    for interaction in analytics["skill_interactions"]:
        skill_name = interaction["skill_name"]
        skill_counts[skill_name] = skill_counts.get(skill_name, 0) + 1
    
    return sorted(skill_counts.items(), key=lambda x: x[1], reverse=True)[:10]

@app.get("/api/projects")
async def get_projects():
    """Get projects data from JSON file"""
    try:
        projects_path = "../src/data/projects.json"
        if os.path.exists(projects_path):
            with open(projects_path, 'r', encoding='utf-8') as f:
                projects = json.load(f)
            return {"projects": projects}
        else:
            return {"projects": []}
    except Exception as e:
        logger.error(f"Error loading projects: {str(e)}")
        return {"projects": []}

@app.get("/api/health")
async def health_check():
    """Health check endpoint"""
    return {
        "status": "healthy",
        "timestamp": datetime.now().isoformat(),
        "version": "1.0.0"
    }

if __name__ == "__main__":
    import uvicorn
    uvicorn.run(app, host="0.0.0.0", port=8001)