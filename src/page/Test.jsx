// // ExampleComponent.js
// import React, { useState } from 'react';
// import {UploadPhoto} from '../UploadPhoto.js'; // تأكد من المسار الصحيح للملف

// function renameFile(originalFile, newName) {
//     return new File([originalFile], newName, { type: originalFile.type });
//   }
// const Test = () => {
//   const [imageFile, setImageUrl] = useState('');
//   const [showImage , setImage ]= useState();
//    function upload(e){
//     setImageUrl(e.target.files[0])
//   }
//   const save = async()=>{
//     const renamedFile = renameFile(imageFile, 'profilessss.jpg');
//     const url = await UploadPhoto(renamedFile);
//     setImage(url);
//   }
//   return (
//     <div>
//       <input type="file" onChange={upload} />
//       <button onClick={save}>Upload</button>
//       {showImage && <img src={showImage} alt="Uploaded" style={{ width: 200 }} />}
//     </div>
//   );
// };

// export default Test;
