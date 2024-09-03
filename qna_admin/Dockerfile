# Base image
FROM python:3.12

# Set working directory
WORKDIR /usr/src/app

# Install dependencies
COPY requirements.txt ./
RUN pip install --no-cache-dir -r requirements.txt

# Copy app source code
COPY . .

# Expose the port the app runs on
EXPOSE 8002

# Run database migrations and start the app
CMD ["sh", "-c", "python manage.py migrate && python manage.py runserver 0.0.0.0:8002"]