import React, { useState } from "react";
import {
  Container,
  Typography,
  Grid,
  Card,
  CardContent,
  CardMedia,
  Button,
  Chip,
  Box,
  Checkbox,
  FormControlLabel,
  FormGroup,
  Paper,
  Dialog,
  DialogContent,
} from "@mui/material";
import StarIcon from "@mui/icons-material/Star";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import NavBar from "../Components/NavBar";
import Footer from "../Components/Footer";

const places = [
  {
    id: 1,
    title: "معبد أبو سمبل",
    shortDescription: "معابد أبو سمبل المذهلة في أسوان.",
    fullDescription: "تعد معابد أبو سمبل المذهلة عبارة عن مبنيين ضخمين من الحجر الرملي يعكسان روعتهما في المياه الهادئة لبحيرة ناصر. تجنب الرحلة الطويلة من أسوان مع راحة السيارة، مما يضمن لك تجربة مريحة وسلسة مباشرة من عتبة دارك. برفقة مرشد من علماء المصريات، استكشف الحكايات الرائعة عن رمسيس الثاني، وزوجته نفرتاري، وإلهة الحب حتحور، والدور المهم لفيضان النيل في تشكيل التاريخ القديم. استمتع بالسرديات التاريخية الغنية أثناء استكشاف هذه المعابد الشهيرة. بعد الاستكشاف، سنعود إلى أسوان في وقت متأخر بعد الظهر، لاختتام يوم مليء برؤى لا مثيل لها حول عجائب مصر القديمة. دع فخامة السيارة وخبرة مرشدك ترفع مستوى رحلتك إلى معابد أبو سمبل، لتخلق ذكريات لا تُنسى لهذه المغامرة الاستثنائية.",
    price: "1,216 EGP",
    rating: 3.8,
    reviews: 31,
    phone: "010-1234-5678",
    images: [
      "https://img.freepik.com/free-photo/old-historical-abu-simbel-temple-ramesses-ii-egypt_181624-43854.jpg?ga=GA1.1.1496392416.1737637764&semt=ais_hybrid",
      "https://r-xx.bstatic.com/xdata/images/xphoto/max1200/412076678.jpg?k=b47dec79c040ebb3aea2fc7c39ae4ae21ec3fbbdff5ce1936ea95a31a9428e89&o=",
      "https://img.freepik.com/free-photo/old-historical-abu-simbel-temple-ramesses-ii-egypt_181624-43854.jpg?ga=GA1.1.1496392416.1737637764&semt=ais_hybrid",
    ],
    category: "جولات",
  },
  {
    id: 2,
    title: "معبد فيلة",
    shortDescription: "معبد فيلة الرائع في أسوان.",
    fullDescription: "معبد فيلة هو واحد من أبرز المعابد في أسوان، ويقع على جزيرة فيلة في نهر النيل. تم بناء المعبد لعبادة الإلهة إيزيس، ويشتهر بجماله المعماري الفريد. يمكنك الاستمتاع بجولة في المعبد والاستماع إلى القصص التاريخية التي تحيط به.",
    price: "800 EGP",
    rating: 4.2,
    reviews: 45,
    phone: "010-9876-5432",
    images: [
      "https://img.freepik.com/free-photo/closeup-engravings-walls-luxor-temple-egypt_181624-38326.jpg?ga=GA1.1.1496392416.1737637764&semt=ais_hybrid",
      "https://img.freepik.com/free-photo/closeup-shot-luxor-temple-egypt_181624-32907.jpg?ga=GA1.1.1496392416.1737637764&semt=ais_hybrid",
      "https://r-xx.bstatic.com/xdata/images/xphoto/max1200/179229418.jpg?k=2803dc0481a18e4990245332e023bad9f0ed55565f3633b4621065b1cbc880b5&o=",
    ],
    category: "جولات",
  },
  {
    id: 3,
    title: "معبد كوم أمبو",
    shortDescription: "معبد كوم أمبو الفريد في أسوان.",
    fullDescription: "معبد كوم أمبو هو معبد فريد من نوعه حيث أنه مخصص لعبادة إلهين، هما حورس وسوبك. يقع المعبد على ضفة النيل ويوفر إطلالة رائعة على النهر. يمكنك استكشاف المعبد والتعرف على تاريخه الغني.",
    price: "700 EGP",
    rating: 4.0,
    reviews: 38,
    phone: "010-1122-3344",
    images: [
      "https://r-xx.bstatic.com/xdata/images/xphoto/max1200/304284640.jpg?k=63453befdc7230aa7bdd91b1067d54644ce801282a4f5c1bdc3a6909fed6e7ba&o=",
      "https://r-xx.bstatic.com/xdata/images/xphoto/max1200/304284597.jpg?k=05e0047c83a806f4b3d2b0b36f3c71192857647502714efc550839fd870dc777&o=",
      "https://r-xx.bstatic.com/xdata/images/xphoto/max1200/304284374.jpg?k=3b4b4f0b55294c498a54315b0e4c2ecb7f4a95d8e7b96aca6d3a6f9fc5e49a36&o=",
    ],
    category: "جولات",
  },
  {
    id: 4,
    title: "متحف النوبة",
    shortDescription: "متحف النوبة في أسوان.",
    fullDescription: "متحف النوبة هو متحف يقع في أسوان ويعرض تاريخ وثقافة النوبة. يحتوي المتحف على العديد من القطع الأثرية التي تعود إلى العصور القديمة.",
    price: "500 EGP",
    rating: 4.5,
    reviews: 50,
    phone: "010-2233-4455",
    images: [
      "https://q-xx.bstatic.com/xdata/images/xphoto/max1200/127822994.jpg?k=a4c01b23e2249bf210199188ee5d762dfc81b6a2807f626ca2343f1034ea21f8&o=",
      "https://r-xx.bstatic.com/xdata/images/xphoto/max1200/130649439.jpg?k=90337d6b0ccf4a4eb70520f4ee6b30d172e325754ae6879bc2aab566ad21ed77&o=",
      "https://q-xx.bstatic.com/xdata/images/xphoto/max1200/130751913.jpg?k=ce946ed9a42f27f26e10aa4290897bbfc7d25c7d54da2649f202eae7be41253a&o=",
    ],
    category: "متاحف وفنون وثقافة",
  },
  {
    id: 5,
    title: "رحلة اسوان الى السد العالي ومعبد فيلة والمسلة",
    shortDescription: "جولة خاصة مصممة لتمنحك نظرة حميمة على أهم المعالم في هذه المدينة القديمة...",
    fullDescription: "جولة خاصة مصممة لتمنحك نظرة حميمة على أهم المعالم في هذه المدينة القديمة. ابدأ رحلتك بزيارة السد العالي المذهل في أسوان، وهو أحد عجائب الهندسة الحديثة التي أعادت تشكيل المنطقة منذ اكتمال بنائه في عام 1960. بعد ذلك، قم بالتعمق في أسرار مصر القديمة عند المسلة غير المكتملة، حيث ستتعرف على التقنيات التي استخدمها نحاتو الحجر القدماء. اختتم مغامرتك برحلة بالقارب إلى معبد فيلة، وهو ملاذ جزيرة جميل مخصص للإلهة إيزيس. توفر كل محطة نظرة فريدة على ماضي مصر، مع تسليط الضوء على أهمية الحفاظ على هذه الكنوز الثقافية. من خلال اختيار هذه الجولة الخاصة، فأنت لا تستكشف أسوان فحسب، بل تدعم المرشدين المحليين وتساهم في اقتصاد السياحة المستدامة الذي يساعد في الحفاظ على هذه المواقع الرائعة للأجيال القادمة. استمتع بتجربة شخصية من خلال سيارة خاصة ومرشد سياحي، لضمان أن تكون رحلتك مفيدة ولا تُنسى.",
    price: "5,014 EGP",
    rating: 4.5,
    reviews: 60,
    phone: "010-2233-4455",
    images: [
      "https://q-xx.bstatic.com/xdata/images/xphoto/max1200/373232168.jpg?k=1a9b5f1fe2bf61a152e1fee11df0ff2131245fe7dad96108eb279df88bed3205&o=",
      "https://r-xx.bstatic.com/xdata/images/xphoto/max1200/373232205.jpg?k=a17b6fd61a5860f21edbaf2c143f754bf174a4b6b89e725ee8984f9dd14b7391&o=",
      "https://q-xx.bstatic.com/xdata/images/xphoto/max1200/373232266.jpg?k=debdf04456dd25eb1b36448311f023c0f40dd4b068e5cc1121e69e79b1106ccf&o=",
    ],
    category: "متاحف وفنون وثقافة",
  },
  {
    id: 6,
    title: "جولة خاصة عند غروب الشمس بالفلوكة",
    shortDescription: "استمتع بسحر أسوان من خلال رحلة على متن مركب شراعي عند غروب الشمس...",
    fullDescription: "استمتع بسحر أسوان من خلال رحلة على متن مركب شراعي عند غروب الشمس، حيث تنبض مياه النيل الهادئة بألوان الغسق النابضة بالحياة. مع انجراف القارب الشراعي المصري الأصيل بلطف، تصبح جزءًا من تقليد عمره قرون، وتستمتع بالجمال الخالد لنهر النيل بطريقة فريدة حقًا. تلقي الشمس الغاربة ضوءًا ذهبيًا، مما يخلق مسرحية ساحرة من الضوء الذي يرقص على سطح الماء. لا توفر هذه الرحلة الهادئة مناظر خلابة فحسب، بل تعزز أيضًا ارتباطًا عميقًا بالثقافة والتاريخ المحليين. كل لحظة تقضيها على متن الفلوكة تتيح لك فرصة التأمل السلمي وتقدير جمال أسوان الطبيعي. ومن خلال المشاركة في هذه التجربة، يساهم السائحون في الاقتصاد المحلي ويساعدون في الحفاظ على التراث الثقافي لهذه المنطقة الرائعة. رحلة الفلوكة عند غروب الشمس هي أكثر من مجرد جولة ذات مناظر خلابة؛ إنها فرصة لدعم مجتمع أسوان النابض بالحياة أثناء الاستمتاع بأمسية هادئة وخلابة على نهر النيلى...",
    price: "1,267 EGP",
    rating: 5,
    reviews: 52,
    phone: "010-2233-4455",
    images: [
      "https://q-xx.bstatic.com/xdata/images/xphoto/max1200/373240213.jpg?k=27e9ed235cc454ebb2e70a08b0df50355ad2416dc0133d1938574f49b01cbb2b&o=",
      "https://q-xx.bstatic.com/xdata/images/xphoto/max1200/373240297.jpg?k=caf647a517255ce57fc036819b44d1abdc242f52af15db4f0029a9a86317fdc5&o=",
      "https://q-xx.bstatic.com/xdata/images/xphoto/max1200/373240189.jpg?k=ef226486a793efa76045fda0c7cd6e40aa0a094e15e07440a50caf1cfec2735f&o=",
    ],
    category: "طبيعة وأنشطة خارجية",
  },
  {
    id: 7,
    title: "عرض الصوت والضوء اسوان",
    shortDescription: "هل تساءلت يومًا كيف كانت الحياة منذ آلاف السنين...",
    fullDescription: "هل تساءلت يومًا كيف كانت الحياة منذ آلاف السنين؟ ستتعرف على ذلك من خلال إنشاء العروض المرئية والمؤثرات الصوتية لمعبد فيلة...",
    price: "1,267 EGP",
    rating: 5,
    reviews: 100,
    phone: "010-2233-4455",
    images: [
      "https://q-xx.bstatic.com/xdata/images/xphoto/max1200/339784367.jpg?k=63e287e8c787e9643af409a467f22368e5496ea7978d10fcbd3a5e1dba57f271&o=",
      "https://q-xx.bstatic.com/xdata/images/xphoto/max1200/339784420.jpg?k=1b83d3a9ca03e03c2f07017a884ce6cbd81a6c6e4a6243674a2d3917846de202&o=",
      "https://r-xx.bstatic.com/xdata/images/xphoto/max1200/339784626.jpg?k=3a00fb8d79cd75bcec7f58b9e326ae0e7648146579774c7dec3d5e7f80be67cd&o=",
    ],
    category: "طبيعة وأنشطة خارجية",
  },
  {
    id: 8,
    title: "جزيرة النباتات",
    shortDescription: "اغتنم الفرصة وقم بزيارة أسوان التي كانت تعرف بأرض الذهب...",
    fullDescription: "اغتنم الفرصة وقم بزيارة أسوان التي كانت تعرف بأرض الذهب حيث كانت كنزًا كبيرًا لملوك النوبة، قم بزيارة أسوان للاستمتاع بتراثها الرائع في رحلة يوم واحد يمكنك فيها زيارة (جزيرة النباتات – القرية النوبية)....",
    price: "1,625 EGP",
    rating: 5,
    reviews: 23,
    phone: "010-2233-4455",
    images: [
      "https://r-xx.bstatic.com/xdata/images/xphoto/max1200/339316853.jpg?k=56fd4c84ec5a3fdc3f2a0fa9b58e5645ea60df9b8728625098773dab8c4f3c40&o=",
      "https://img.freepik.com/premium-photo/close-up-view-colorful-faluca-traditional-boat-sailing-river-sorrounded-by-vegetation_1048944-11883581.jpg?ga=GA1.1.1496392416.1737637764&semt=ais_hybrid",
      "https://image.shutterstock.com/image-photo/botanical-garden-kitcheners-island-nile-260nw-1864170793.jpg",
    ],
    category: "طبيعة وأنشطة خارجية",
  },
  {
    id: 9,
    title: "التسوق واستكشاف الأسواق في أسوان",
    shortDescription: "مغامرة تسوق ممتعة في سوق أسوان النابض بالحياة...",
    fullDescription: "مغامرة تسوق ممتعة في سوق أسوان النابض بالحياة. سيستقبلك مرشدك ذو الخبرة من فندقك أو من رحلتك النيلية ويقودك عبر السوق الصاخبة، ويكشف لك عن الجواهر المخفية. اكتشف متاجر الأعشاب العطرية المليئة بالهدايا التذكارية والزيوت الثمينة والعطور الجذابة ومنتجات العناية بالجسم الفاخرة. لا تفوت فرصة الحصول على خرطوشة شخصية منقوش عليها اسمك بالهيروغليفية القديمة، وهي هدية تذكارية فريدة من نوعها ولا تُنسى حقًا. اكتشف مجموعة متنوعة من المقشرات الطبيعية والصابون والأعشاب والروائح الساحرة لتعزيز جمالك ورفاهتك. انغمس في المشاهد والأصوات والروائح في هذا السوق النابض بالحياة، مما يخلق تجربة لا تُنسى وغنية بالحواس حقًا....",
    price: "2,523 EGP",
    rating: 5,
    reviews: 500,
    phone: "010-2233-4455",
    images: [
      "https://q-xx.bstatic.com/xdata/images/xphoto/max1200/444318889.jpg?k=5892a7350f363aecac044d77b2b5c3411320ffdc620362c83e1bd69313fccdeb&o=",
      "https://q-xx.bstatic.com/xdata/images/xphoto/max1200/444318856.jpg?k=871b7903ffd9c265666cca53cf4299fde71ae56385c1a89f6b594e2f94de691b&o=",
      "https://r-xx.bstatic.com/xdata/images/xphoto/max1200/444318871.jpg?k=2918ef9779c4afd05d374b796d5b92e87da89742e0ef193aa62837810a4cfd9f&o=",
    ],
    category: "طبيعة وأنشطة خارجية",
  },
];

const categories = ["جولات", "طبيعة وأنشطة خارجية", "متاحف وفنون وثقافة"];

const Tour = () => {
  const [selectedCategories, setSelectedCategories] = useState([]);
  const [selectedPlace, setSelectedPlace] = useState(null);

  const handleFilterChange = (category) => {
    setSelectedCategories((prev) =>
      prev.includes(category) ? prev.filter((c) => c !== category) : [...prev, category]
    );
  };

  const handleOpenDetails = (place) => setSelectedPlace(place);
  const handleCloseDetails = () => setSelectedPlace(null);

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
  };

  // Filter places based on selected categories
  const filteredPlaces = selectedCategories.length > 0
    ? places.filter((place) => selectedCategories.includes(place.category))
    : places;

  return (
    <> 
    <NavBar/>
    <Container maxWidth="lg" sx={{ mt: 4, direction: "rtl", display: "flex", gap: 3 }}>
      <Paper sx={{ p: 3, width: 300, borderRadius: 3, boxShadow: 3 }}>
        <Typography variant="h6" fontWeight="bold" gutterBottom>
          التصنيف حسب:
        </Typography>
        <FormGroup>
          {categories.map((category) => (
            <FormControlLabel
              key={category}
              control={
                <Checkbox
                  checked={selectedCategories.includes(category)}
                  onChange={() => handleFilterChange(category)}
                />
              }
              label={category}
            />
          ))}
        </FormGroup>
      </Paper>

      <Grid container spacing={3} sx={{ flex: 1 }}>
        {filteredPlaces.map((place) => (
          <Grid item xs={12} key={place.id}>
            <Card sx={{ display: "flex", borderRadius: 3, boxShadow: 3, p: 2 }}>
              <CardMedia component="img" sx={{ width: 200, borderRadius: 2 }} image={place.images[0]} alt={place.title} />
              <CardContent sx={{ flex: 1 }}>
                <Typography variant="h6" fontWeight="bold">{place.title}</Typography>
                <Typography variant="body2" color="text.secondary" sx={{ mt: 1, mb: 2 }}>{place.shortDescription}</Typography>
                <Box display="flex" alignItems="center" gap={1}>
                  <Chip label={place.price} color="primary" sx={{ fontSize: "14px", fontWeight: "bold" }} />
                  <Box display="flex" alignItems="center">
                    <StarIcon sx={{ color: "#FFD700" }} />
                    <Typography variant="body2" fontWeight="bold" sx={{ ml: 0.5 }}>
                      {place.rating} ({place.reviews} تقييم)
                    </Typography>
                  </Box>
                </Box>
                <Button variant="contained" sx={{ mt: 2 }} onClick={() => handleOpenDetails(place)}>
                  عرض التفاصيل
                </Button>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>

      {selectedPlace && (
        <Dialog open={selectedPlace} onClose={handleCloseDetails} fullWidth>
          <DialogContent sx={{ textAlign: "center" }}>
            <Slider {...settings}>
              {selectedPlace.images.map((img, index) => (
                <Box key={index} component="img" src={img} sx={{ width: "100%", height: 200, objectFit: "cover" }} />
              ))}
            </Slider>
            <Typography variant="h6" fontWeight="bold" sx={{ mt: 2 }}>{selectedPlace.title}</Typography>
            <Typography variant="body2" sx={{ mt: 1 }}>{selectedPlace.fullDescription}</Typography>
            <Typography variant="h6" color="primary" sx={{ mt: 1 }}>{selectedPlace.price}</Typography>
            <Typography variant="h6" color="text.secondary" sx={{ mt: 1 }}>📞 {selectedPlace.phone}</Typography>
            <Button variant="contained" sx={{ mt: 2 }} onClick={handleCloseDetails}>إغلاق</Button>
          </DialogContent>
        </Dialog>
      )}
    </Container>
 <Footer/>
 </>

);
};

export default Tour;