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
          <li><strong>Geolocation Data:</strong> We collect geolocation data, including your country code (optional), language, and region, solely for the purpose of providing you with localized news. This data is sent to our API and is not used for any other purposes.</li>
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
        <li><strong>Geolocation:</strong>  Used to determine your location for serving localized news.</li>
        <li><strong>Storage:</strong> Used for saving user preferences, such as theme settings, quick links, and bookmarks.</li>
        <li><strong>Bookmarks:</strong> Used to access and manage your bookmarks within the extension.</li>
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
