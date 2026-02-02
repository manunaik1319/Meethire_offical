// =====================================
// GOOGLE APPS SCRIPT FOR MEETHIRE WAITLIST
// =====================================
// Copy this entire code to your Google Apps Script
// Go to: Extensions > Apps Script in your Google Sheet

function doPost(e) {
    Logger.log('=== DOPOST CALLED ===');
    
    try {
        // Check if e exists
        if (!e) {
            Logger.log('❌ Event object is undefined - DEPLOYMENT ISSUE');
            return ContentService
                .createTextOutput(JSON.stringify({
                    'result': 'error',
                    'message': 'Deployment configuration error. Please redeploy with correct settings.'
                }))
                .setMimeType(ContentService.MimeType.JSON);
        }

        var sheet = SpreadsheetApp.getActiveSpreadsheet().getActiveSheet();
        Logger.log('Sheet accessed: ' + sheet.getName());

        // Log incoming request
        Logger.log('Request parameter: ' + JSON.stringify(e.parameter || {}));
        Logger.log('Request postData: ' + (e.postData ? e.postData.contents : 'none'));

        // Parse the incoming data
        var data = {};
        
        if (e.postData && e.postData.contents) {
            Logger.log('Parsing from postData.contents');
            var contents = e.postData.contents;
            Logger.log('Raw contents: ' + contents);
            
            // Try to parse as JSON first
            try {
                data = JSON.parse(contents);
                Logger.log('Parsed as JSON');
            } catch (jsonError) {
                Logger.log('Not JSON, parsing as URL-encoded');
                // Parse URL-encoded data
                var params = contents.split('&');
                for (var i = 0; i < params.length; i++) {
                    var pair = params[i].split('=');
                    if (pair.length === 2) {
                        data[decodeURIComponent(pair[0])] = decodeURIComponent(pair[1].replace(/\+/g, ' '));
                    }
                }
            }
        } else if (e.parameter && Object.keys(e.parameter).length > 0) {
            Logger.log('Using URL parameters');
            data = e.parameter;
        } else {
            throw new Error('No data received - check deployment settings');
        }

        Logger.log('Parsed data: ' + JSON.stringify(data));

        // Check if email already exists (prevent duplicates)
        var emailColumn = 3; // Column C (email)
        var lastRow = sheet.getLastRow();
        Logger.log('Last row: ' + lastRow);
        
        if (lastRow > 1) {
            var emailList = sheet.getRange(2, emailColumn, lastRow - 1, 1).getValues();
            var emailExists = emailList.some(function (row) {
                return row[0] === data.email;
            });

            if (emailExists) {
                Logger.log('Duplicate email found: ' + data.email);
                return ContentService
                    .createTextOutput(JSON.stringify({
                        'result': 'duplicate',
                        'message': 'This email is already on the waitlist'
                    }))
                    .setMimeType(ContentService.MimeType.JSON);
            }
        }

        // Add timestamp and form data to sheet
        Logger.log('Adding row to sheet...');
        Logger.log('Data values - name: ' + data.name + ', email: ' + data.email);
        
        sheet.appendRow([
            new Date(),
            data.name || '',
            data.email || '',
            data.phone || '',
            data.role || '',
            data.organization || '',
            data.city || '',
            data.message || '',
            data.updates === 'true' || data.updates === true ? 'Yes' : 'No'
        ]);
        Logger.log('✅ Row added successfully');

        // Send thank you email only if we have an email address
        if (data.email && data.email.trim() !== '') {
            Logger.log('Calling sendThankYouEmail...');
            sendThankYouEmail(data.email, data.name || 'there');
        } else {
            Logger.log('⚠️ No email address found, skipping email send');
        }

        // Return success response
        return ContentService
            .createTextOutput(JSON.stringify({
                'result': 'success',
                'message': 'Successfully joined the waitlist'
            }))
            .setMimeType(ContentService.MimeType.JSON);

    } catch (error) {
        Logger.log('❌ ERROR in doPost: ' + error.toString());
        Logger.log('Error stack: ' + error.stack);
        
        // Return error response
        return ContentService
            .createTextOutput(JSON.stringify({
                'result': 'error',
                'message': error.toString()
            }))
            .setMimeType(ContentService.MimeType.JSON);
    }
}

// Function to send thank you email
function sendThankYouEmail(email, name) {
    Logger.log('=== EMAIL FUNCTION CALLED ===');
    Logger.log('Recipient: ' + email);
    Logger.log('Name: ' + name);
    
    try {
        var subject = "Welcome to MeetHire - You're on the Waitlist!";
        
        Logger.log('Preparing email content...');

        var htmlBody = `
<!DOCTYPE html>
<html>
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <style>
        body { 
            font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Helvetica', 'Arial', sans-serif;
            line-height: 1.6; 
            color: #333333; 
            margin: 0;
            padding: 0;
            background-color: #f5f5f5;
        }
        .email-wrapper {
            max-width: 600px;
            margin: 0 auto;
            background-color: #ffffff;
        }
        .header { 
            background: linear-gradient(135deg, #1a1a1a 0%, #2d2d2d 100%);
            padding: 40px 30px;
            text-align: center;
        }
        .logo {
            font-size: 36px;
            font-weight: 700;
            color: #ffffff;
            margin: 0;
            letter-spacing: -0.5px;
        }
        .logo-accent {
            color: #FBCB6A;
        }
        .tagline {
            color: #cccccc;
            font-size: 14px;
            margin-top: 8px;
            font-weight: 400;
        }
        .content { 
            padding: 50px 40px;
            background: #ffffff;
        }
        .greeting {
            font-size: 24px;
            font-weight: 600;
            color: #1a1a1a;
            margin: 0 0 20px 0;
        }
        .message {
            font-size: 16px;
            line-height: 1.8;
            color: #4a4a4a;
            margin: 20px 0;
        }
        .highlight-box {
            background: #f8f9fa;
            border-left: 4px solid #FBCB6A;
            padding: 20px;
            margin: 30px 0;
            border-radius: 4px;
        }
        .highlight-box p {
            margin: 0;
            font-size: 15px;
            color: #2d2d2d;
        }
        .cta-section {
            text-align: center;
            margin: 40px 0 30px 0;
        }
        .cta-text {
            font-size: 15px;
            color: #666666;
            margin-bottom: 20px;
        }
        .signature {
            margin-top: 40px;
            padding-top: 30px;
            border-top: 1px solid #e0e0e0;
        }
        .signature-text {
            font-size: 16px;
            color: #2d2d2d;
            font-weight: 500;
            margin: 0;
        }
        .signature-title {
            font-size: 14px;
            color: #666666;
            margin: 5px 0 0 0;
        }
        .footer { 
            background: #f8f9fa;
            padding: 30px 40px;
            text-align: center;
            border-top: 1px solid #e0e0e0;
        }
        .footer-text {
            font-size: 13px;
            color: #666666;
            margin: 8px 0;
        }
        .footer-link {
            color: #1a1a1a;
            text-decoration: none;
            font-weight: 500;
        }
        .footer-link:hover {
            color: #FBCB6A;
        }
        .divider {
            height: 1px;
            background: #e0e0e0;
            margin: 20px 0;
        }
        @media only screen and (max-width: 600px) {
            .content {
                padding: 30px 20px;
            }
            .header {
                padding: 30px 20px;
            }
            .footer {
                padding: 20px;
            }
            .greeting {
                font-size: 20px;
            }
        }
    </style>
</head>
<body>
    <div class="email-wrapper">
        <!-- Header with Logo -->
        <div class="header">
            <h1 class="logo">Meet<span class="logo-accent">Hire</span></h1>
            <p class="tagline">Connecting Talent with Opportunity</p>
        </div>
        
        <!-- Main Content -->
        <div class="content">
            <h2 class="greeting">Welcome to MeetHire!</h2>
            
            <p class="message">
                Thank you for joining our waitlist. We're thrilled to have you as part of our early community.
            </p>
            
            <div class="highlight-box">
                <p><strong>What's Next?</strong></p>
                <p style="margin-top: 10px;">
                    You'll be among the first to receive early access when we launch. We're working hard to create 
                    the best campus hiring experience, and your interest means the world to us.
                </p>
            </div>
            
            <p class="message">
                MeetHire is designed to streamline the campus recruitment process, making it easier for colleges, 
                companies, and students to connect. Whether you're a TPO managing placements, an HR professional 
                seeking talent, or a student looking for opportunities - we're building something special for you.
            </p>
            
            <div class="cta-section">
                <p class="cta-text">Stay tuned for updates. We'll be in touch soon!</p>
            </div>
            
            <!-- Signature -->
            <div class="signature">
                <p class="signature-text">Best regards,</p>
                <p class="signature-text">The MeetHire Team</p>
                <p class="signature-title">Building the Future of Campus Hiring</p>
            </div>
        </div>
        
        <!-- Footer -->
        <div class="footer">
            <p class="footer-text">
                <strong>MeetHire</strong> - Campus Hiring Made Simple
            </p>
            <div class="divider"></div>
            <p class="footer-text">
                Questions? Reach out to us at 
                <a href="mailto:meethire.in@gmail.com" class="footer-link">meethire.in@gmail.com</a>
            </p>
            <p class="footer-text" style="margin-top: 15px; color: #999999; font-size: 12px;">
                &copy; 2026 MeetHire. All rights reserved.
            </p>
        </div>
    </div>
</body>
</html>
`;

        var plainBody = `
Welcome to MeetHire!

Thank you for joining our waitlist. We're thrilled to have you as part of our early community.

WHAT'S NEXT?
You'll be among the first to receive early access when we launch. We're working hard to create the best campus hiring experience, and your interest means the world to us.

MeetHire is designed to streamline the campus recruitment process, making it easier for colleges, companies, and students to connect. Whether you're a TPO managing placements, an HR professional seeking talent, or a student looking for opportunities - we're building something special for you.

Stay tuned for updates. We'll be in touch soon!

Best regards,
The MeetHire Team
Building the Future of Campus Hiring

---
MeetHire - Campus Hiring Made Simple
Questions? Email us at meethire.in@gmail.com
© 2026 MeetHire. All rights reserved.
`;

        Logger.log('Attempting to send email via GmailApp...');
        
        // Send email
        GmailApp.sendEmail(email, subject, plainBody, {
            htmlBody: htmlBody,
            name: 'MeetHire'
        });

        Logger.log('✅ Email sent successfully to: ' + email);
        return true;

    } catch (error) {
        Logger.log('❌ ERROR sending email: ' + error.toString());
        Logger.log('Error stack: ' + error.stack);
        // Don't throw error - we don't want email failure to break the form submission
        return false;
    }
}

function doGet(e) {
    Logger.log('=== DOGET CALLED ===');
    
    // If there are parameters, treat it like a form submission
    if (e && e.parameter && Object.keys(e.parameter).length > 0) {
        Logger.log('GET request with parameters, processing as form submission');
        return doPost(e);
    }
    
    // Otherwise, just return status
    return ContentService.createTextOutput("MeetHire Waitlist API is running ✅");
}

// ====================
// TEST FUNCTIONS
// ====================

// Test function - run this to verify data is being saved
function testAppendRow() {
    var sheet = SpreadsheetApp.getActiveSpreadsheet().getActiveSheet();
    sheet.appendRow([
        new Date(),
        'Test Name',
        'test@email.com',
        '+91 1234567890',
        'College / TPO',
        'Test College',
        'Test City',
        'Testing the integration',
        'Yes'
    ]);
    Logger.log('✅ Test row added successfully');
}

// Test function for email - CHANGE THE EMAIL BELOW TO YOUR EMAIL
function testEmail() {
    var testEmail = 'your-test-email@gmail.com'; // ⚠️ CHANGE THIS
    Logger.log('Testing email to: ' + testEmail);

    try {
        sendThankYouEmail(testEmail, 'Test User');
        Logger.log('✅ Test email sent successfully to ' + testEmail);
        return 'Email sent to ' + testEmail;
    } catch (error) {
        Logger.log('❌ ERROR: ' + error.toString());
        return 'Error: ' + error.toString();
    }
}
