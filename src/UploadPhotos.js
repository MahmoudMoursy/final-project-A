export const UploadPhotos = async (images) => {
    const uploadedUrls = [];

    for (const image of images) {
        const formData = new FormData();
        formData.append('file', image.file);
        formData.append('upload_preset', 'Abdalla');

        const res = await fetch('https://api.cloudinary.com/v1_1/dfievnowq/image/upload', {
            method: 'POST',
            body: formData,
        });

        const data = await res.json();
        uploadedUrls.push(data.secure_url);
    }

    return uploadedUrls;
};
