import FlexBox from "../../components/FlexBox";
import ProfileIcon from "../../components/ProfileIcon";
import Footer from "../../components/Footer";
import Button from "../../components/Button";
import profileImage from "../../images/profile.jpg";
import "./settings.scss";

export default function Settings() {
  return (
    <>
    <FlexBox
      className="settings-wrapper"
      content_sidebar
      aliItem="normal"
    >
      <FlexBox className="sidebar" hide="sm">
        <div className="links">
          <p className="link active">Edit Profile</p>
          <p className="link">Change Password</p>
          <p className="link">Apps and Websites</p>
          <p className="link">Email and SMS</p>
          <p className="link">Push Notifications</p>
          <p className="link">Manage Contacts</p>
          <p className="link">Privacy and Security</p>
          <p className="link">Login Activity</p>
          <p className="link">Emails from Instagram</p>

          <div className="switch-link">
            <a  href="/">Switch to Professional Account</a>
          </div>
        </div>

        <div className="meta-container">
          <div>Meta Logo</div>
          <a href="/">Accounts Center</a>
          <p>Control settings for connected experience across instagram, the Facebook app and Messenger including story and post sharing and logging in.</p>
        </div>
      </FlexBox>

      <div className="content">
        <form>
          <div className="icon">
            <ProfileIcon
              iconSize="big"
              image={profileImage}
            />
          </div>
          <div className="caption">
            <p className="name">jun.nujj</p>
            <a href="/">Change Profile Photo</a>
          </div>

          <label className="name" htmlFor="name">Name</label>
          <div className="name">
            <input type="text" id="name" name="name" />
            <div className="add-info">
              <p className="details">Helps people discover yoru account by using the name you're known by: either your full name, nickname or business name.<br />
              <span>You can only change your name twice within 14 days.</span></p>
            </div>
          </div>

          <label className="username" htmlFor="username">Username</label>
          <div className="username">
            <input type="text" id="username" name="username" />
            <div className="add-info">
              <p className="details">In most cases, you'll be able to change your username back to jun.nujj for another 14 days. <a href="/">Learn More</a></p>
            </div>
          </div>


          <label htmlFor="website">Website</label>
          <input type="text" id="website" name="website" placeholder="Website" />

          <label className="bio" htmlFor="bio">Bio</label>
          <div className="bio">
            <textarea id="bio" name="bio" rows="5" />
            <div className="add-info">
              <p className="header">Personal Information</p>
              <p className="details">Provide your personal information even if the account is used for a business, a pet or something else. This won't be a part of your public profile.</p>
            </div>
          </div>



          <label htmlFor="mail">E-mail</label>
          <input type="email" id="mail" name="user_email" />

          <label htmlFor="phone">Phone Number</label>
          <input type="text" id="phone" name="phone" placeholder="Phone Number" />

          <label htmlFor="gender">Gender</label>
          <input type="text" id="gender" name="gender" placeholder="Gender" />

          <label className="suggest" htmlFor="suggest">Similar Account Suggestions</label>
          <div className="suggest">
            <input type="checkbox" id="suggest" name="suggest" />
            <div className="add-info">
              <p>Include your account when recommending similar accounts people might want to follow.</p>
            </div>
          </div>

          <div className="submit">
            <Button>Submit</Button>
            <a href="/">Temporarily disable my account</a>
          </div>
        </form>
      </div>

    </FlexBox>

    <div className="footer">
      <Footer center />
    </div>
    </>
  );
}

