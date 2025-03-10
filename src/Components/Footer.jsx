import React from 'react';
import { Box, Typography, Grid, Link, TextField, Button } from '@mui/material';

const Footer = () => {
  return (
    <Box
      sx={{
        backgroundColor: '#5C7285', // تغيير لون الخلفية
        color: 'white', // تغيير لون النص ليكون أكثر وضوحًا
        padding: { xs: 3, sm: 4 },
        borderTop: '1px solid #ddd',
        direction: 'rtl', // يجعل النصوص من اليمين إلى اليسار
      }}
    >
      <Grid container spacing={4} justifyContent="center">
        {/* قسم الذكاء الاصطناعي */}
        <Grid item xs={12} sm={6} md={3}>
          <Typography variant="h6" gutterBottom>
            أدوات الذكاء الاصطناعي
          </Typography>
          {[
            'مولد الصور بالذكاء الاصطناعي',
            'مولد الفيديو بالذكاء الاصطناعي',
            'تحسين جودة الصور',
            'إزالة الخلفية',
            'محرر الصور',
            'مولد الصوت بالذكاء الاصطناعي',
            'جميع أدوات Freepik',
          ].map((item, index) => (
            <Link
              key={index}
              href="#"
              color="inherit"
              display="block"
              sx={{ transition: '0.3s', '&:hover': { color: '#FFD700' } }}
            >
              {item}
            </Link>
          ))}
        </Grid>

        {/* قسم المعلومات */}
        <Grid item xs={12} sm={6} md={3}>
          <Typography variant="h6" gutterBottom>
            المعلومات
          </Typography>
          {[
            'الأسعار',
            'من نحن',
            'واجهة API',
            'الوظائف',
            'محتوى مخصص',
            'إرشادات العلامة التجارية',
            'الأحداث',
            'اتجاهات البحث',
            'المدونة',
          ].map((item, index) => (
            <Link
              key={index}
              href="#"
              color="inherit"
              display="block"
              sx={{ transition: '0.3s', '&:hover': { color: '#FFD700' } }}
            >
              {item}
            </Link>
          ))}
        </Grid>

        {/* قسم الشروط والسياسات */}
        <Grid item xs={12} sm={6} md={3}>
          <Typography variant="h6" gutterBottom>
            الشروط والسياسات
          </Typography>
          {[
            'شروط الاستخدام',
            'اتفاقية الترخيص',
            'سياسة الخصوصية',
            'حقوق النشر',
            'سياسة الكوكيز',
            'إعدادات الكوكيز',
          ].map((item, index) => (
            <Link
              key={index}
              href="#"
              color="inherit"
              display="block"
              sx={{ transition: '0.3s', '&:hover': { color: '#FFD700' } }}
            >
              {item}
            </Link>
          ))}
        </Grid>

        {/* قسم الدعم */}
        <Grid item xs={12} sm={6} md={3}>
          <Typography variant="h6" gutterBottom>
            الدعم
          </Typography>
          {['الأسئلة الشائعة', 'اتصل بنا'].map((item, index) => (
            <Link
              key={index}
              href="#"
              color="inherit"
              display="block"
              sx={{ transition: '0.3s', '&:hover': { color: '#FFD700' } }}
            >
              {item}
            </Link>
          ))}
        </Grid>
      </Grid>

      {/* قسم الاشتراك في البريد الإلكتروني */}
      <Box sx={{ mt: 4, textAlign: 'center' }}>
        <Typography variant="h6" gutterBottom>
          وسائل التواصل الاجتماعي
        </Typography>
        <Typography variant="body1" gutterBottom>
          احصل على أحدث التحديثات والعروض مباشرة إلى بريدك الإلكتروني
        </Typography>
        <Box
          component="form"
          sx={{ display: 'flex', justifyContent: 'center', gap: 2, flexWrap: 'wrap' }}
        >
          <TextField
            variant="outlined"
            placeholder="أدخل بريدك الإلكتروني"
            size="small"
            sx={{
              width: { xs: '100%', sm: 'auto' },
              textAlign: 'right',
              backgroundColor: 'white',
              borderRadius: 1,
            }}
          />
          <Button variant="contained" sx={{ backgroundColor: '#FFD700', color: '#5C7285' }}>
            اشترك
          </Button>
        </Box>
      </Box>

      {/* قسم حقوق النشر */}
      <Box sx={{ mt: 4, textAlign: 'center' }}>
        <Typography variant="body2" color="inherit">
          حقوق النشر © 2010-2025 Freepik. جميع الحقوق محفوظة.
        </Typography>
      </Box>
    </Box>
  );
};

export default Footer;
