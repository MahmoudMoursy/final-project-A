import React, { useState } from "react";
import { Container, Typography, Avatar, Box, Card, CardContent, Grid, Button, TextField } from "@mui/material";
import { useLocation } from "react-router-dom";
import NavBar from "../Components/NavBar";
import Footer from "../Components/Footer";

const PostDetails = () => {
    const location = useLocation();
    const { post } = location.state || {};

    // حالة لحفظ التعليقات
    const [comments, setComments] = useState([
        { id: 1, user: "عاصم عوض", text: "أنا مطور ويب متخصص في تطوير المواقع", avatar: "https://via.placeholder.com/50" },
        { id: 2, user: "أحمد صالح", text: "يمكنني تنفيذ الخدمة بشكل احترافي", avatar: "https://via.placeholder.com/50" },
    ]);

    // حالة لحفظ التعليق الجديد
    const [newComment, setNewComment] = useState("");

    // دالة لإضافة تعليق جديد
    const handleAddComment = () => {
        if (newComment.trim() === "") return; // عدم إضافة تعليق فارغ

        const newCommentObj = {
            id: comments.length + 1,
            user: "مستخدم جديد", // يمكن جلبه من `Auth`
            text: newComment,
            avatar: "https://img.freepik.com/premium-vector/business-man-avatar-vector_1133257-2430.jpg",
        };

        setComments([...comments, newCommentObj]); // تحديث التعليقات
        setNewComment(""); // مسح الحقل بعد الإضافة
    };

    if (!post) {
        return <Typography variant="h5" style={{ textAlign: "center", marginTop: "20px" }}>المنشور غير موجود</Typography>;
    }

    return (
        <>
            <NavBar />
            <Container maxWidth="xl" style={{ marginTop: "50px", padding: "20px", direction: "rtl" }}>
                <Grid container spacing={3}>
                    {/* قسم المحتوى الرئيسي */}
                    <Grid item xs={12} md={9}>
                        <Card sx={{ borderRadius: 3, boxShadow: 3, p: 3 }}>
                            <CardContent>
                                <Typography variant="h5" fontWeight="bold">
                                    {post.text}
                                </Typography>
                                <Typography variant="body2" sx={{ color: "gray", mt: 2 }}>
                                    {new Date(post.timestamp).toLocaleString("ar-EG")}
                                </Typography>
                                <Box sx={{ mt: 3, bgcolor: "#f9f9f9", p: 2, borderRadius: 2 }}>
                                    <Typography variant="body1">{post.details}</Typography>
                                </Box>
                            </CardContent>
                        </Card>

                        {/* قسم التعليقات */}
                        <Card sx={{ borderRadius: 3, boxShadow: 3, p: 3, mt: 3 }}>
                            <Typography variant="h6" fontWeight="bold">
                                التعليقات ({comments.length})
                            </Typography>

                            {/* عرض التعليقات */}
                            {comments.map((comment) => (
                                <Box key={comment.id} sx={{ mt: 2, display: "flex", alignItems: "center" }}>
                                    <Avatar src={comment.avatar} />
                                    <Box sx={{ ml: 2 }}>
                                        <Typography variant="subtitle1" fontWeight="bold">{comment.user}</Typography>
                                        <Typography variant="body2" color="gray">{comment.text}</Typography>
                                    </Box>
                                </Box>
                            ))}

                            {/* إدخال تعليق جديد */}
                            <Box sx={{ mt: 3 }}>
                                <TextField
                                    fullWidth
                                    variant="outlined"
                                    label="أضف تعليقًا"
                                    value={newComment}
                                    onChange={(e) => setNewComment(e.target.value)}
                                />
                                <Button
                                    variant="contained"
                                    sx={{ mt: 2, bgcolor: "#091e3d", "&:hover": { bgcolor: "#071730" } }}
                                    onClick={handleAddComment}
                                >
                                    إضافة تعليق
                                </Button>
                            </Box>
                        </Card>
                    </Grid>

                    {/* الشريط الجانبي */}
                    <Grid item xs={12} md={3}>
                        <Card sx={{ borderRadius: 3, boxShadow: 3, p: 3 }}>
                            <Typography variant="h6" fontWeight="bold">عن الموضوع</Typography>
                            <Typography variant="body2" sx={{ mt: 1, color: "gray" }}>تاريخ النشر: منذ 22 ساعة و 5 دقائق</Typography>

                            <Box sx={{ mt: 3 }}>
                                <Typography variant="h6" fontWeight="bold">ناشر الموضوع</Typography>
                                <Box sx={{ display: "flex", alignItems: "center", mt: 1 }}>
                                    <Avatar src={post.image} />
                                    <Box sx={{ ml: 2 }}>
                                        <Typography variant="subtitle1" fontWeight="bold">{post.user}</Typography>
                                        <Typography variant="body2" color="gray">مستخدم جديد</Typography>
                                    </Box>
                                </Box>
                            </Box>
                        </Card>
                    </Grid>
                </Grid>
            </Container>
            <Footer />
        </>
    );
};

export default PostDetails;
