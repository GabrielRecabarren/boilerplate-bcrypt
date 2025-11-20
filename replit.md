# FreeCodeCamp - Advanced Node and Express

## Overview
This is a FreeCodeCamp boilerplate project for learning about BCrypt hashing and HelmetJS security. It's a Node.js/Express backend application designed to work with FreeCodeCamp's testing environment.

## Project Information
- **Type**: Backend API (Node.js/Express)
- **Purpose**: Educational project for learning information security concepts
- **Main File**: server.js
- **Port**: 5000
- **Host**: 0.0.0.0 (configured for Replit environment)

## Project Structure
- `server.js` - Main application file with Express server setup
- `freeCodeCamp/fcctesting.js` - FreeCodeCamp testing integration
- `package.json` - Node.js dependencies and scripts

## Dependencies
- express - Web framework
- bcrypt - Password hashing library
- helmet - Security middleware
- mongodb - MongoDB driver
- body-parser - Request body parsing
- cors - Cross-origin resource sharing

## API Endpoints
The application includes FreeCodeCamp testing endpoints:
- `/_api/server.js` - Returns the server.js file contents
- `/_api/package.json` - Returns the package.json file contents
- `/_api/app-info` - Returns response headers information

## Setup for Replit
- Port changed from 3000 to 5000 for Replit compatibility
- Server binds to 0.0.0.0 to allow external access
- Workflow configured to run `npm start`
- Deployment configured for autoscale target

## Running the Application
The application starts automatically via the "Start application" workflow, which runs `npm start`.

## Recent Changes (November 20, 2025)
- Updated server to listen on port 5000 with 0.0.0.0 binding
- Installed npm dependencies
- Configured workflow for automatic startup
- Set up deployment configuration for autoscale
- Created replit.md documentation
