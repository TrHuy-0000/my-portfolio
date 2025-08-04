from fastapi import FastAPI, Form
from pydantic import BaseModel
from fastapi.middleware.cors import CORSMiddleware

app = FastAPI()

# Cho phép kết nối từ Frontend
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],  # hoặc chỉ định domain Vue như ["http://localhost:5173"]
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# Schema dữ liệu gửi lên từ contact form
class ContactForm(BaseModel):
    name: str
    email: str
    subject: str
    message: str

@app.post("/contact")
def send_message(form: ContactForm):
    print("New message from contact form:")
    print(form)
    # Tùy chọn: lưu vào DB, gửi email, hoặc log ra
    return {"message": "Đã nhận được liên hệ thành công!"}
