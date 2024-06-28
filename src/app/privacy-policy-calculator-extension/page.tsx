"use client";

const PrivacyPolicy = () => {
  return (
    <div className="data-section">
      <h2>Privacy Policy for Calculator/Unit conversion</h2>

      <div className="data-content">
        <h3>Data Collection and Usage</h3>
        <p>
          This extension collects and stores the following data:
        </p>
        <ul>
          <li><strong>Calculation History:</strong> Your calculation history is stored locally using Chrome's storage system. This history is used solely for your convenience to view past calculations and is not shared with any third parties.</li>
          <li><strong>Theme Preferences:</strong> Your theme preference (light or dark mode) is saved locally to provide a consistent user experience.</li>
        </ul>
      </div>

      <div className="data-content">
        <h3>Data Retention</h3>
        <p>
          Data is stored locally on your device and retained until you manually delete it or uninstall the extension.
        </p>
      </div>

      <div className="data-content">
        <h3>Permissions</h3>
        <p>
          This extension requires only one permissions to function correctly. This include Storage, which is used for saving calculation history and theme preference.
        </p>
      </div>

      <div className="data-content">
        <h3>Data Sharing</h3>
        <p>
          We do not share any data collected by this extension with third parties. All data remains on your local device.
        </p>
      </div>

      <div className="data-content">
        <h3>User Control</h3>
        <p>
          You can clear your calculation history by clicking on the calculator H button and selecting the clear button to delete stored data.
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
