// UploadPhoto.js
import axios from 'axios';

export const UploadPhoto = async (file) => {
  const data = new FormData();
  data.append('file', file);
  data.append('upload_preset', 'Abdalla'); // اسم الـ preset اللي عملته
  data.append('cloud_name', 'dfievnowq');  // اسم حسابك في Cloudinary

  const res = await axios.post(
    'https://api.cloudinary.com/v1_1/dfievnowq/image/upload',
    data
  );

  return res.data.secure_url; // رابط الصورة النهائي
};




