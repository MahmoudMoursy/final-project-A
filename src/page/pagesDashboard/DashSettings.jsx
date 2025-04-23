import React, { useState } from 'react';
import SideBar from '../../Components/SideBar';
import '../../Components/Sidebar.css';

function DashSettings() {
  const [theme, setTheme] = useState('light');
  const [notifications, setNotifications] = useState(true);
  const [displayName, setDisplayName] = useState('Abdalla Ahmed');
  const [email, setEmail] = useState('abdallaahmed22681@gmail.com');
  const [password, setPassword] = useState('');
  const [avatar, setAvatar] = useState(null);

  const handleAvatarChange = (e) => {
    if (e.target.files && e.target.files[0]) {
      setAvatar(URL.createObjectURL(e.target.files[0]));
    }
  };

  const handleSave = (e) => {
    e.preventDefault();
    // Implement save logic here
    alert('Settings saved!');
  };

  return (
    <div style={{display: 'flex', minHeight: '100vh', background: 'linear-gradient(135deg, #f8fafc 0%, #e8f0fe 100%)'}}>
      <SideBar />
      <div className="dashboard-main-content" style={{flex: 1, padding: '2rem'}}>
        <div className="dashboard-header" style={{marginBottom: '2rem'}}>
          <h1 className='text-dark' style={{fontWeight: 700, fontSize: '2.5rem'}}>Settings</h1>
          <p style={{color: '#7b8ca7'}}>Customize your dashboard experience</p>
        </div>
        <form className="dashboard-content" onSubmit={handleSave} style={{display: 'flex', flexWrap: 'wrap', gap: '2rem'}}>
          {/* Profile Card */}
          <div style={{flex: '1 1 320px', background: '#fff', borderRadius: '16px', boxShadow: '0 4px 24px #0001', padding: '2rem', minWidth: 300, maxWidth: 400}}>
            <div style={{display: 'flex', flexDirection: 'column', alignItems: 'center', marginBottom: 24}}>
              <div style={{position: 'relative'}}>
                <img src={avatar || 'https://res.cloudinary.com/dfievnowq/image/upload/v1745308143/p2hd1c8gdilrpzehwt0t.jpg'} alt="avatar" style={{width: 100, height: 100, borderRadius: '50%', border: '4px solid #e8f0fe', objectFit: 'cover'}} />
                <label htmlFor="avatar-upload" style={{position: 'absolute', bottom: 0, right: 0, background: '#3498db', color: '#fff', borderRadius: '50%', padding: 8, cursor: 'pointer', fontSize: 18, border: '2px solid #fff'}}>
                  <span role="img" aria-label="edit">✎</span>
                  <input id="avatar-upload" type="file" accept="image/*" style={{display: 'none'}} onChange={handleAvatarChange} />
                </label>
              </div>
              <h2 className='text-dark' style={{margin: '1rem 0 0.5rem', fontWeight: 600}}>{displayName}</h2>
              <p style={{color: '#7b8ca7', fontSize: '0.95rem'}}>{email}</p>
            </div>
            <div className="settings-item" style={{marginBottom: 16}}>
              <label htmlFor="displayName" style={{fontWeight: 500}}>Display Name</label>
              <input id="displayName" type="text" value={displayName} onChange={e => setDisplayName(e.target.value)} style={{width: '100%', padding: 8, borderRadius: 8, border: '1px solid #dde6ed', marginTop: 6}} />
            </div>
            <div className="settings-item" style={{marginBottom: 16}}>
              <label htmlFor="email" style={{fontWeight: 500}}>Email</label>
              <input id="email" type="email" value={email} onChange={e => setEmail(e.target.value)} style={{width: '100%', padding: 8, borderRadius: 8, border: '1px solid #dde6ed', marginTop: 6}} />
            </div>
            <div className="settings-item">
              <label htmlFor="password" style={{fontWeight: 500}}>Change Password</label>
              <input id="password" type="password" value={password} onChange={e => setPassword(e.target.value)} style={{width: '100%', padding: 8, borderRadius: 8, border: '1px solid #dde6ed', marginTop: 6}} placeholder="••••••••" />
            </div>
          </div>
          {/* Preferences Card */}
          <div style={{flex: '1 1 320px', background: '#fff', borderRadius: '16px', boxShadow: '0 4px 24px #0001', padding: '2rem', minWidth: 300, maxWidth: 400}}>
            <h2 style={{marginBottom: 24, fontWeight: 600}}>Preferences</h2>
            <div className="settings-item" style={{marginBottom: 24, display: 'flex', alignItems: 'center', justifyContent: 'space-between'}}>
              <label htmlFor="theme" style={{fontWeight: 500}}>Theme</label>
              <select id="theme" value={theme} onChange={e => setTheme(e.target.value)} style={{padding: 8, borderRadius: 8, border: '1px solid #dde6ed', background: '#f8fafc'}}>
                <option value="light">Light</option>
                <option value="dark">Dark</option>
              </select>
            </div>
            <div className="settings-item" style={{marginBottom: 24, display: 'flex', alignItems: 'center', justifyContent: 'space-between'}}>
              <label htmlFor="notifications" style={{fontWeight: 500}}>Notifications</label>
              <label className="switch">
                <input type="checkbox" id="notifications" checked={notifications} onChange={() => setNotifications(!notifications)} />
                <span className="slider round"></span>
              </label>
            </div>
            <button type="submit" style={{width: '100%', background: 'linear-gradient(90deg,#3498db 0%,#1abc9c 100%)', color: '#fff', border: 'none', borderRadius: 8, padding: '0.75rem', fontWeight: 600, fontSize: '1.1rem', boxShadow: '0 2px 8px #0002', cursor: 'pointer', transition: 'background 0.2s'}}>Save Changes</button>
          </div>
        </form>
        {/* Toggle Switch Style */}
        <style>{`
          .switch {
            position: relative;
            display: inline-block;
            width: 48px;
            height: 24px;
          }
          .switch input { display: none; }
          .slider {
            position: absolute;
            cursor: pointer;
            top: 0; left: 0; right: 0; bottom: 0;
            background: #dde6ed;
            transition: .4s;
            border-radius: 24px;
          }
          .slider:before {
            position: absolute;
            content: '';
            height: 18px;
            width: 18px;
            left: 3px;
            bottom: 3px;
            background: #fff;
            transition: .4s;
            border-radius: 50%;
            box-shadow: 0 2px 8px #0001;
          }
          input:checked + .slider {
            background: linear-gradient(90deg,#3498db 0%,#1abc9c 100%);
          }
          input:checked + .slider:before {
            transform: translateX(24px);
          }
        `}</style>
      </div>
    </div>
  );
}

export default DashSettings;
