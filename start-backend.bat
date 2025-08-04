@echo off

REM Start FastAPI server for Windows
echo Starting FastAPI server...

REM Navigate to backend directory
cd backend

REM Create virtual environment if not exists
if not exist "venv" (
    echo Creating virtual environment...
    python -m venv venv
)

REM Activate virtual environment
call venv\Scripts\activate

REM Install requirements
pip install -r requirements.txt

REM Start the server
uvicorn main:app --reload --host 0.0.0.0 --port 8000
