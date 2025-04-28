"use client";

const PrivacyPolicy = () => {
  return (
    <div className="data-section">
      <h2>Privacy Policy for NutriElements</h2>

      <div className="data-content">
        <h3>Data Collection and Usage</h3>
        <p>
          This extension collects and stores the following data:
        </p>
        <ul>
          <li><strong>Country Information:</strong> Your country is detected via the BigDataCloud API to provide localized search results and store links. This information is stored temporarily in memory during your browsing session and is not permanently saved.</li>
          <li><strong>Theme Preferences:</strong> Your theme preference (light or dark mode) is saved locally to provide a consistent user experience.</li>
          <li><strong>Selected Filters:</strong> Any dietary filters (vegetarian, vegan, etc.) you apply are stored temporarily during your session to improve usability.</li>
        </ul>
      </div>

      <div className="data-content">
        <h3>Data Retention</h3>
        <p>
          Theme preferences are stored locally on your device using localStorage and retained until you manually clear your browser data or uninstall the extension. Country information is only stored in memory during the active session and is not retained after closing the extension.
        </p>
      </div>

      <div className="data-content">
        <h3>Permissions</h3>
        <p>
          This extension requires the following permissions to function correctly:
        </p>
        <ul>
          <li><strong>Storage:</strong> Used for saving theme preferences</li>
          <li><strong>Geolocation:</strong> Used for determining your country to provide localized search results (optional and only used when the extension is active)</li>
        </ul>
      </div>

      <div className="data-content">
        <h3>Data Sharing</h3>
        <p>
          We do not share any data collected by this extension with third parties. All data remains on your local device, with the exception of anonymous API requests to BigDataCloud for geolocation services.
        </p>
      </div>

      <div className="data-content">
        <h3>External Links</h3>
        <p>
          The extension provides links to external websites for purchasing supplements and learning more about elements. Please note that we are not responsible for the privacy practices of these third-party sites.
        </p>
      </div>

      <div className="data-content">
        <h3>User Control</h3>
        <p>
          You can reset your theme preferences by clearing your browser's localStorage data. You can opt out of country detection by blocking the extension's access to geolocation services in your browser settings.
        </p>
      </div>

      <div className="data-content">
        <h3>Contact</h3>
        <p>
          If you have any questions or suggestions about our Privacy Policy, please contact us at kelvin.igbinoba01@gmail.com
        </p>
      </div>
      <br></br>
    </div>
  );
};

export default PrivacyPolicy;