"use client";

const PrivacyPolicy = () => {
  return (
    <div className="data-section">
      <h2>Privacy Policy for Discover news</h2>

      <div className="data-content">
        <h3>Data Collection and Usage</h3>
        <p>
          This extension collects and stores the following data:
        </p>
        <ul>
          <li><strong>Language, timezone and or country code:
            </strong> 
            This extension collects few information which are language, country code (optional) and time zone. This data is stored locally and used to provide a more personalized experience (solely for the purpose of providing you with localized news). 
            We may send this information to an external API to enhance functionality, but it is not used for any other purpose.</li>
          <li><strong>User Preferences:</strong>  Your preferences, such as theme settings, quick links, and other customization options, are stored locally using Chrome's storage system to enhance your browsing experience.</li>
        </ul>
      </div>

      <div className="data-content">
        <h3>Data Retention</h3>
        <p>
        All data is stored locally on your device and is retained until you manually delete it or uninstall the extension. Geolocation data is removed from storage when the extension is uninstalled.
        </p>
      </div>

      <div className="data-content">
        <h3>Permissions</h3>
        <ul>
        <li><strong>Language, timezone and or country code :</strong>  Used to determine your location for serving localized news.</li>
        <li><strong>Storage:</strong> Used for saving user preferences, such as theme settings, quick links.</li>
        </ul>

      </div>

      <div className="data-content">
        <h3>Data Sharing</h3>
        <p>
        We do not share any data collected by this extension with third parties. Geolocation data is used solely to serve you localized news and remains on your device or our API for this purpose only.
        </p>
      </div>

      <div className="data-content">
        <h3>User Control</h3>
        <p>
        You have control over your data. You can manage your preferences and delete any stored data via the extension settings. Geolocation data is automatically removed when the extension is uninstalled.
        </p>
      </div>
      <div className="data-content">
        <h3>        Third-Party Services
        </h3>
        <p><b>Google Fonts:</b></p>
        <p>
This extension uses to enhance the visual appearance. While no personal data is collected or stored by this extension, Google Fonts may log basic data such as IP addresses when serving the fonts.
</p>

      </div>


      <div className="data-content">
        <h3>Contact</h3>
        <p>
          If you have any questions or suggestions about our Privacy Policy, please contact us at kelvin.igbinoba01@gmail.com.
        </p>
      </div>
      <br></br>
    </div>
  );
};

export default PrivacyPolicy;
