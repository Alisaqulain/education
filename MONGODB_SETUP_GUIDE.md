# MongoDB Setup Guide

## Current Status

✅ **JWT Authentication** - Working correctly  
❌ **MongoDB Connection** - Connection failed

Error: `querySrv ENOTFOUND _mongodb._tcp.123`

## Fixing MongoDB Connection

### Step 1: Validate Your Connection String

Test your connection string format:
```bash
GET http://localhost:3000/api/test/validate-mongo
```

This will show you what's wrong with your connection string.

### Step 2: Correct Connection String Format

#### For MongoDB Atlas (Cloud):
```env
MONGODB_URI=mongodb+srv://username:password@cluster-name.mongodb.net/database-name?retryWrites=true&w=majority
```

**Important:**
- Replace `username` with your MongoDB username
- Replace `password` with your MongoDB password (URL-encode special characters)
- Replace `cluster-name` with your actual cluster name (e.g., `cluster0.abc123`)
- Replace `database-name` with your database name (e.g., `edgen-institute`)
- Do NOT include `_mongodb._tcp` - that's a DNS record, not a connection string

#### For Local MongoDB:
```env
MONGODB_URI=mongodb://localhost:27017/edgen-institute
```

### Step 3: Common Issues & Solutions

#### Issue 1: Wrong Format
**Error:** `querySrv ENOTFOUND _mongodb._tcp.123`

**Solution:**
- You might be using the SRV connection string format incorrectly
- Make sure you're copying the **Connection String** from MongoDB Atlas, not the SRV DNS record
- The string should start with `mongodb+srv://` not just contain `_mongodb._tcp`

#### Issue 2: Special Characters in Password
If your password has special characters (`@`, `#`, `$`, etc.), you need to URL-encode them:

```javascript
// Example: Password "p@ssw0rd#123"
// Encoded: "p%40ssw0rd%23123"
```

**Special Characters Encoding:**
- `@` → `%40`
- `#` → `%23`
- `$` → `%24`
- `%` → `%25`
- `/` → `%2F`
- `?` → `%3F`
- `&` → `%26`

#### Issue 3: IP Whitelist
MongoDB Atlas requires your IP to be whitelisted:
1. Go to MongoDB Atlas Dashboard
2. Click "Network Access"
3. Add your current IP address or use `0.0.0.0/0` (less secure, for testing)

#### Issue 4: Database User Not Created
1. Go to MongoDB Atlas Dashboard
2. Click "Database Access"
3. Create a database user with read/write permissions
4. Use those credentials in the connection string

### Step 4: Get Your Connection String from MongoDB Atlas

1. **Log in to MongoDB Atlas**
   - Go to https://cloud.mongodb.com
   - Sign in to your account

2. **Select Your Cluster**
   - Click on your cluster

3. **Click "Connect"**
   - Click the "Connect" button on your cluster

4. **Choose "Connect your application"**
   - Select "Drivers" tab
   - Choose "Node.js" version 5.5 or later
   - Copy the connection string

5. **Replace Placeholders**
   ```
   mongodb+srv://<username>:<password>@cluster0.xxxxx.mongodb.net/?retryWrites=true&w=majority
   ```
   
   Replace:
   - `<username>` with your database username
   - `<password>` with your database password (URL-encoded if needed)
   - Add database name: `mongodb+srv://username:password@cluster0.xxxxx.mongodb.net/edgen-institute?retryWrites=true&w=majority`

### Step 5: Update .env.local

```env
# Correct Format Examples:

# MongoDB Atlas (Recommended)
MONGODB_URI=mongodb+srv://myuser:mypassword123@cluster0.abc123.mongodb.net/edgen-institute?retryWrites=true&w=majority

# Local MongoDB (Development)
MONGODB_URI=mongodb://localhost:27017/edgen-institute
```

### Step 6: Test Again

After updating `.env.local`:

1. **Restart your dev server** (important!)
   ```bash
   # Stop the server (Ctrl+C)
   npm run dev
   ```

2. **Test the connection:**
   ```bash
   GET http://localhost:3000/api/test/connection
   ```

3. **Run full test:**
   ```bash
   GET http://localhost:3000/api/test
   ```

### Step 7: Verify Connection String Format

Use the validation endpoint:
```bash
GET http://localhost:3000/api/test/validate-mongo
```

This will tell you:
- ✅ If format is correct
- ❌ What's wrong with your connection string
- 💡 Suggestions to fix it

## Example Connection Strings

### ✅ Correct Examples:

```env
# MongoDB Atlas - Standard
MONGODB_URI=mongodb+srv://admin:SecurePass123@cluster0.abc123.mongodb.net/edgen-institute?retryWrites=true&w=majority

# MongoDB Atlas - With Special Characters (URL-encoded)
MONGODB_URI=mongodb+srv://admin:p%40ssw0rd%23123@cluster0.abc123.mongodb.net/edgen-institute?retryWrites=true&w=majority

# Local MongoDB
MONGODB_URI=mongodb://localhost:27017/edgen-institute
```

### ❌ Incorrect Examples:

```env
# Missing protocol
MONGODB_URI=username:password@cluster.mongodb.net/database

# Wrong format (SRV DNS record)
MONGODB_URI=_mongodb._tcp.cluster.mongodb.net

# Missing database name
MONGODB_URI=mongodb+srv://user:pass@cluster.mongodb.net/

# Placeholder values not replaced
MONGODB_URI=mongodb+srv://<username>:<password>@cluster.mongodb.net/
```

## Still Having Issues?

1. **Check MongoDB Atlas Status:**
   - Visit https://status.mongodb.com
   - Ensure Atlas is operational

2. **Verify Network Access:**
   - Check IP whitelist in Atlas
   - Try adding `0.0.0.0/0` temporarily (for testing only)

3. **Check Credentials:**
   - Verify username/password are correct
   - Ensure database user has proper permissions

4. **Test with MongoDB Compass:**
   - Download MongoDB Compass
   - Try connecting with the same connection string
   - If it works in Compass but not in app, check environment variables

5. **Check Firewall/Antivirus:**
   - Some firewalls block MongoDB connections
   - Temporarily disable to test

## Quick Checklist

- [ ] Connection string starts with `mongodb+srv://` or `mongodb://`
- [ ] Username and password are replaced (no `<username>` or `<password>` placeholders)
- [ ] Password is URL-encoded if it has special characters
- [ ] Database name is specified in the connection string
- [ ] IP address is whitelisted in MongoDB Atlas (if using Atlas)
- [ ] Database user exists and has proper permissions
- [ ] `.env.local` file is in the root directory
- [ ] Dev server was restarted after changing `.env.local`
- [ ] No extra spaces or quotes around the connection string

## Support

If you continue to have issues:
1. Run validation: `GET /api/test/validate-mongo`
2. Check the error message details
3. Verify all checklist items above




