const forgotPasswordTemplate = ({ name, otp }) => {
  return `
<div>
    <p>Dear, ${name}</p>
    <p>You're requested a password reset. Please use following OTP code to reset your password.</p>
    <div style="background-color: #4CAF50; border: none; color: white; padding: 15px 32px; text-align: center; text-decoration: none; display: inline-block; font-size: 16px; margin: 4px 2px; cursor: pointer; font-weight: bold;">
        ${otp}
    </div>
    <p>This otp is valid for 1 hour only. Enter this otp in the tokoKu website to proceed with resetting your password.</p>
    <br/>
    </br>
    <p>Thanks</p>
    <p style="font-weight: bold;">tokoKu</p>
</div>
    `;
};

export default forgotPasswordTemplate;
