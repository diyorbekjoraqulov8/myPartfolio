// const selected  = document.querySelector(".selected");

// const optionsContainer = document.querySelector(".options-container");

// const optionsList = document.querySelectorAll(".option");

// selected.addEventListener("click",  () =>{
//     optionsContainer.classList.toggle("active");
// });


// optionsList.forEach(o => {
//     o.addEventListener("click", () =>{
//         selected.innerHTML = o.querySelector("label").innerHTML;
//         optionsContainer.classList.remove("active");
//     });
// });


// const langBox = {
//     home:{
//         uz:'Asosiy',
//         en:'Home',
//         ru:'Главный'
//     },
//     Services:{
//         uz:'Xizmatlar',
//         en:'Services',
//         ru:'Уcлуги'
//     },
//     Skills:{
//         uz:"Ko'nikmalar",
//         en:'Skills',
//         ru:'Навыки'
//     },
//     Portfolio:{
//         uz:'Portfel',
//         en:'Partfolio',
//         ru:'Портфолио'
//     },
//     Contact:{
//         uz:'Aloqa',
//         en:'Contact',
//         ru:'Контакт'
//     },
//     job:{
//         uz:"Front End Dasturchi",
//         en:"Front End Developer",
//         ru:"Фронт Енд Разработчик"
//     },
//     name:{
//         uz:"Diyorbek Jo'raqulov",
//         en:"Diyorbek Jo'raqulov",
//         ru:"Диёрбек Жўрақулов"
//     },
//     title:{
//         uz:"Men mustaqil veb-dasturchiman. Keling, birga ishlaylik.",
//         en:"I am a freelance web developer. Let's work together.",
//         ru:"Я внештатный веб-разработчик. Давайте работать вместе."
//     },
//     aloqa:{
//         uz: "Men bilan bog'laning",
//         en: "Contact Me",
//         ru: "Свяжитесь со мной"
//     },
//     yuklash:{
//         uz:"CV yuklab olish",
//         en:"Download CV",
//         ru:"Скачать резюме"
//     },
//     id:{
//         uz:"MENING XIZMATLARIM",
//         en:"MY SERVICES",
//         ru:"МОИ УСЛУГИ"
//     },
//     ServiseTitle:{
//         uz:"Men mijozlarim uchun qila oladigan narsalar",
//         en:"Things I may do for my clients",
//         ru:"Что я могу сделать для своих клиентов"
//     },
//     text:{
//         uz:"Salom Men bilan Ishlasangiz Sizning Web saytingizni Mukammal yarataman. Ustunlik Jihatlarim Vue Js yordamida Reactive va Progressive muhitni yaratish ",
//         en:"Hello, If you work with me, I will make your website perfect. My strengths are creating Reactive and Progressive environments using Vue Js",
//         ru:"Здравствуйте, если вы будете работать со мной, я сделаю ваш сайт идеальным. Мои сильные стороны — создание реактивных и прогрессивных сред с использованием Vue Js."
//     },
//     serOne:{
//         uz:"Zamonaviy Framework",
//         en:"Framework",
//         ru:"Фрамеwорк",
//         text: {
//             uz:"Java Script dasturlash tilining eng tezkor hisoblangan frameworki bu Vue Js. Va men bu sohada 2 yil ishlaganman",
//             en:"The fastest considered framework of the Java Script programming language is Vue Js. And I worked in this field for 2 years",
//             ru:"Самая быстрая рассматриваемая среда языка программирования Java Script — Vue Js. И я работал в этой области в течение 2 лет"
//         }
//     },
//     serTwo:{
//         uz:"Moslashuvchan",
//         en:"Adaptative",
//         ru:"Адаптивный",
//         text: {
//             uz:"Eng Oxirgi texnalogiyalar yordamida Sahifani Har qanday Muhit va Sharoitga tayyor qilish asosiy ishim.",
//             en:"My main job is to make the Page ready for Any Environment and Conditions using the latest technologies.",
//             ru:"Моя основная работа заключается в том, чтобы сделать страницу готовой к любой среде и условиям с использованием новейших технологий."
//         }
//     },
//     serThre:{
//         uz:"Router",
//         en:"Router",
//         ru:"роутер",
//         text: {
//             uz:"Single-page application yani sahifani yangilamasdan kerakli tarkibni serverdan dinamik ravishda yuklash. Bunday ilovalar tez ishlaydi va serverni kamroq yuklaydi",
//             en:"Single-page application, that is, dynamic loading of the necessary content from the server without refreshing the page. Such applications work quickly and load the server less",
//             ru:"Одностраничное приложение, то есть динамическая загрузка необходимого контента с сервера без перезагрузки страницы. Такие приложения работают быстро и меньше нагружают сервер"
//         }
//     },
//     serFour:{
//         uz:"Chiroyli Dizayn",
//         en:"Design",
//         ru:"Дизайн",
//         text: {
//             uz:"Figma va Photoshop dagi dizayn orqali chiroyli Sayt yaratish",
//             en:"Creating a beautiful website by designing in Figma and Photoshop",
//             ru:"Создание красивого веб-сайта с помощью дизайна в Figma и Photoshop"
//         }
//     },

//     subTitle:{
//         uz:"Ko'nikmalar",
//         en:"My skills",
//         ru:"Мои навыки"
//     },
//     skillTitle:{
//         uz:"Mening dasturlash ko'nikmalarim nimalarni o'z ichiga oladi?",
//         en:"What My Programming Skills Included?",
//         ru:"Что включало мои навыки программирования?"
//     },
//     skillText:{
//         uz:"Men oddiy, intuitiv va sezgir foydalanuvchi interfeysini ishlab chiqaman, bu foydalanuvchilarga ushbu texnologiyalar yordamida kamroq kuch va vaqt sarflab ishlarni bajarishga yordam beradi.",
//         en:"I develop simple, intuitive and responsive user interface that helps users get things done with less effort and time with those technologies.",
//         ru:"Я разрабатываю простой, интуитивно понятный и отзывчивый пользовательский интерфейс, который помогает пользователям выполнять задачи с меньшими усилиями и временем с помощью этих технологий."
//     },
//     partfolio:{
//         partfolioTitle:{
//             uz:"Eng so'nggi loyihalar",
//             en:"Latest Projects",
//             ru:"Последние проекты"
//         },
//         partfolioInfo:{
//             all:{
//                 uz:"Hammasi",
//                 en:"All",
//                 ru:"Все"
//             }
//         }
//     },
// }