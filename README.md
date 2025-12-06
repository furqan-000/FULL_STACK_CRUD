## 📋 Project Overview

This application was built as a practice project to demonstrate full-stack CRUD operations. The system manages two main entities:
- **Students** (Users table)
- **Publications** (Publications table)

### Database Schema

#### Users Table
| id | email | first_name | last_name |
|----|-------|------------|-----------|
| 1  | jsmith21@uic.edu | John | Smith |
| 2  | ajones15@uic.edu | Adam | Jones |
| 3  | mjohns8@uic.edu | Mary | Johnson |

#### Sample Publications Table
| id | student_id | title | year |
|----|------------|-------|------|
| 1  | 2 | Publication #1 | 2015 |
| 2  | 2 | Publication #2 | 2015 |
| 3  | 1 | Research XYZ | 2018 |
| 4  | 3 | Article ABC | 2020 |

## 🚀 Current Implementation Status

### ✅ **COMPLETED FEATURES**
- **Student Management (CRUD)**:
  - Create new students
  - Read/View all students
  - Update student information
  - Basic student listing interface
- **Backend API**:
  - RESTful endpoints for student operations
  - MySQL database connection
  - CORS enabled for frontend communication
- **Frontend**:
  - React-based user interface
  - Bootstrap styling
  - Routing with React Router
  - Form handling for student creation/updates

### ⚠️ **TODO / IN PROGRESS**
- **Publications CRUD Operations**:
  - Create new publications for students
  - Update existing publications
  - Delete publications
  - View publications with student details
- **Publication Management Interface**
- **Delete functionality for students**
- **Form validation and error handling**

### 🔧 **TECH STACK**
- **Frontend**: React, Bootstrap, Axios, React Router
- **Backend**: Node.js, Express.js
- **Database**: MySQL
- **API Communication**: RESTful APIs
