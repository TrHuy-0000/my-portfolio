#!/bin/bash

# Start FastAPI server
echo "Starting FastAPI server..."

# Navigate to backend directory
cd backend

# Install dependencies if not installed
if [ ! -d "venv" ]; then
    echo "Creating virtual environment..."
    python -m venv venv
fi

# Activate virtual environment
source venv/bin/activate

# Install requirements
pip install -r requirements.txt

# Start the server
uvicorn main:app --reload --host 0.0.0.0 --port 8000
