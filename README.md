# Sabitha Gratuity Services - Full Stack Application

A complete full-stack web application for Sabitha Gratuity Services with Django backend and React frontend.

## Features

### Frontend (React + Vite)
- Modern responsive design with Tailwind CSS
- Professional multi-page website
- Contact form with real-time validation
- Testimonials system with submission form
- Mobile-first responsive design
- Professional animations and micro-interactions

### Backend (Django + DRF)
- RESTful API with Django Rest Framework
- Contact form handling with email notifications
- Testimonials management system
- Admin panel for content management
- CORS enabled for frontend integration
- SQLite database (easily configurable for PostgreSQL/MySQL)

## Quick Start

### Prerequisites
- Node.js (v16 or higher)
- Python (v3.8 or higher)
- pip (Python package manager)

### Installation & Setup

1. **Install Frontend Dependencies**
   ```bash
   npm install
   ```

2. **Setup Backend**
   ```bash
   npm run setup-backend
   ```

3. **Start Both Frontend and Backend**
   ```bash
   npm start
   ```

This will start:
- Frontend: http://localhost:5173
- Backend API: http://localhost:8000

### Individual Commands

**Frontend Only:**
```bash
npm run frontend
```

**Backend Only:**
```bash
npm run backend
```

**Backend Setup (if needed):**
```bash
cd backend
pip install -r requirements.txt
python manage.py migrate
python manage.py createsuperuser  # Optional: Create admin user
```

## API Endpoints

- `POST /api/contact/` - Submit contact form
- `GET /api/testimonials/` - Get approved testimonials
- `POST /api/testimonials/` - Submit new testimonial
- `GET /api/health/` - Health check

## Admin Panel

Access the Django admin at: http://localhost:8000/admin

Features:
- Manage contact messages
- Approve/reject testimonials
- View submission analytics

## Email Configuration

For production, update the email settings in `backend/sgs_backend/settings.py`:

```python
EMAIL_BACKEND = 'django.core.mail.backends.smtp.EmailBackend'
EMAIL_HOST = 'your-smtp-host'
EMAIL_PORT = 587
EMAIL_USE_TLS = True
EMAIL_HOST_USER = 'your-email@domain.com'
EMAIL_HOST_PASSWORD = 'your-app-password'
```

## Environment Variables

Create `backend/.env` file:
```
SECRET_KEY=your-secret-key
DEBUG=True
EMAIL_HOST=smtp.gmail.com
EMAIL_HOST_USER=your-email@gmail.com
EMAIL_HOST_PASSWORD=your-app-password
```

## Production Deployment

### Frontend
```bash
npm run build
```

### Backend
```bash
cd backend
pip install -r requirements.txt
python manage.py collectstatic
python manage.py migrate
```

## Technology Stack

**Frontend:**
- React 18
- Vite
- Tailwind CSS
- Axios
- React Router
- Lucide React Icons

**Backend:**
- Django 4.2
- Django Rest Framework
- django-cors-headers
- SQLite (default)

## Project Structure

```
├── src/                    # React frontend
│   ├── components/         # Reusable components
│   ├── pages/             # Page components
│   ├── services/          # API services
│   └── ...
├── backend/               # Django backend
│   ├── sgs_backend/       # Django project
│   ├── api/               # API app
│   └── requirements.txt
├── public/                # Static assets
└── package.json
```

## Contact Information

**Sabitha Gratuity Services**
- Phone: +91 90005 52708
- Email: neelima@gratuityservices.com
- Founder: M. Neelima Reddy, FIII
- Service Areas: Telangana, Andhra Pradesh, Karnataka

## License

This project is proprietary software for Sabitha Gratuity Services.# Sabitha-Gratuity-Services-Project
