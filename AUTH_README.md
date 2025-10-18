# Role-Based Authentication System

This Next.js application implements a secure role-based authentication system using Firebase Firestore and bcrypt for password hashing.

## 🔐 Authentication Features

- **Role-based access control** (Admin & Agent)
- **Secure password hashing** with bcrypt
- **JWT token-based authentication**
- **Protected routes** with middleware
- **Firebase Firestore** for user storage
- **Modern UI** with Tailwind CSS and shadcn/ui

## 🎯 User Roles

### Admin

- **Route**: `/admin/dashboard`
- **Permissions**: Full system access
- **Features**: Property management, agent management, reports, settings

### Agent

- **Route**: `/agent/dashboard`
- **Permissions**: Limited access to assigned properties and clients
- **Features**: Property listings, client management, appointments, leads

## 🚀 Quick Start

### 1. Initialize Test Users

First, create test users by calling the initialization API:

```bash
# In development only
curl -X POST http://localhost:3000/api/auth/init-users
```

### 2. Login Credentials

Use these test credentials to login:

**Admin Account:**

- Email: `admin@amitrealestaste.com`
- Password: `admin123`
- Role: Admin

**Agent Account:**

- Email: `agent@amitrealestaste.com`
- Password: `agent123`
- Role: Agent

### 3. Access the Login Page

Visit: `http://localhost:3000/login`

## 📁 Project Structure

```
app/
├── login/
│   └── page.js                 # Login form with role selection
├── admin/
│   ├── layout.js              # Admin dashboard layout
│   └── dashboard/
│       └── page.js            # Admin dashboard
├── agent/
│   ├── layout.js              # Agent dashboard layout
│   └── dashboard/
│       └── page.js            # Agent dashboard
└── api/
    └── auth/
        ├── login/
        │   └── route.js       # Login API endpoint
        ├── register/
        │   └── route.js       # User registration API
        └── init-users/
            └── route.js       # Test user initialization

lib/
├── firebase.js                # Firebase configuration
├── auth.js                    # User authentication utilities
└── jwt.js                     # JWT token utilities

middleware.js                  # Route protection middleware
```

## 🔧 API Endpoints

### Authentication APIs

#### POST `/api/auth/login`

Login with email, password, and role.

**Request:**

```json
{
  "email": "admin@amitrealestaste.com",
  "password": "admin123",
  "role": "admin"
}
```

**Response:**

```json
{
  "success": true,
  "message": "Login successful",
  "token": "jwt_token_here",
  "user": {
    "id": "user_id",
    "email": "admin@amitrealestaste.com",
    "role": "admin",
    "name": "Admin User"
  },
  "redirectUrl": "/admin/dashboard"
}
```

#### POST `/api/auth/register`

Create a new user account.

**Request:**

```json
{
  "email": "newagent@amitrealestaste.com",
  "password": "password123",
  "role": "agent",
  "name": "New Agent"
}
```

#### POST `/api/auth/init-users` (Development Only)

Initialize test users in the database.

## 🛡️ Security Features

### Password Security

- Passwords are hashed using bcrypt with salt rounds of 12
- Original passwords are never stored in the database

### JWT Tokens

- Tokens expire in 24 hours
- Include user ID, email, role, and name in payload
- Stored in localStorage on the client side

### Route Protection

- Middleware protects `/admin/*` and `/agent/*` routes
- Automatic role-based redirection
- Invalid tokens redirect to login page

### Role-based Access Control

- Admin users can only access `/admin/*` routes
- Agent users can only access `/agent/*` routes
- Cross-role access attempts redirect to login

## 🎨 UI Components

The application uses modern UI components from shadcn/ui:

- **Cards** - Dashboard layout and content sections
- **Forms** - Login form with validation
- **Buttons** - Actions and navigation
- **Dropdowns** - User menus and role selection
- **Badges** - Status indicators
- **Avatars** - User profile pictures

## 🔥 Firebase Integration

### Firestore Collections

#### Users Collection (`users`)

```javascript
{
  id: "auto_generated_id",
  email: "user@example.com",
  password: "hashed_password_with_bcrypt",
  role: "admin" | "agent",
  name: "User Name",
  createdAt: timestamp,
  isActive: true
}
```

### Firebase Configuration

Environment variables in `.env`:

```env
NEXT_PUBLIC_FIREBASE_API_KEY=your_api_key
NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN=your_project.firebaseapp.com
NEXT_PUBLIC_FIREBASE_PROJECT_ID=your_project_id
NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET=your_project.appspot.com
NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID=your_sender_id
NEXT_PUBLIC_FIREBASE_APP_ID=your_app_id
JWT_SECRET=your_jwt_secret_key
```

## 🧪 Testing

### Test the Login Flow

1. **Visit Login Page**: `http://localhost:3000/login`
2. **Enter Credentials**: Use the test credentials above
3. **Select Role**: Choose Admin or Agent from dropdown
4. **Submit**: Should redirect to appropriate dashboard

### Test Role Protection

1. **Login as Admin**: Should access `/admin/dashboard`
2. **Try Agent Route**: Manually visit `/agent/dashboard` - should redirect to login
3. **Logout**: Token should be cleared, protected routes inaccessible

## 🔍 Troubleshooting

### Common Issues

1. **"User not found" Error**

   - Run the init-users API first
   - Check Firebase Firestore for user collection

2. **Token Errors**

   - Check JWT_SECRET in .env file
   - Clear localStorage and login again

3. **Firebase Errors**

   - Verify Firebase configuration in .env
   - Check Firebase project permissions

4. **Route Access Issues**
   - Verify middleware.js is working
   - Check browser console for errors

## 📋 Next Steps

To extend this authentication system:

1. **Add Password Reset**: Implement forgot password functionality
2. **Email Verification**: Add email verification for new users
3. **Profile Management**: Allow users to update their profiles
4. **Audit Logging**: Track user actions and logins
5. **Two-Factor Authentication**: Add 2FA for enhanced security
6. **Session Management**: Implement proper session handling
7. **Role Permissions**: Add granular permissions within roles

## 🚨 Production Checklist

Before deploying to production:

- [ ] Change JWT_SECRET to a strong, unique value
- [ ] Remove or protect the `/api/auth/init-users` endpoint
- [ ] Set up Firebase security rules
- [ ] Implement rate limiting for auth APIs
- [ ] Add CORS configuration
- [ ] Set up proper error logging
- [ ] Configure HTTPS
- [ ] Review and test all security measures

## 📞 Support

For issues or questions regarding this authentication system, please check:

1. Firebase Firestore connection and permissions
2. Environment variables configuration
3. JWT token validation
4. Middleware route protection logic

The system is designed to be scalable and secure for production use with proper configuration.
