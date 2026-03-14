<?xml version="1.0" encoding="UTF-8" ?>
<!DOCTYPE html>
<html b:css='false' b:defaultwidgetversion='2' b:layoutsversion='3' xmlns='http://www.w3.org/1999/xhtml' xmlns:b='http://www.google.com/namespaces/blogger/template' xmlns:data='http://www.google.com/namespaces/blogger/data' xmlns:expr='http://www.google.com/namespaces/blogger/expr'>
<head>
<meta content='width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no' name='viewport'/>
<title><data:blog.pageTitle/></title>

<b:skin><![CDATA[
/* إعدادات تصفير الصفحة بالكامل */
body {
  background-color: #ffffff;
  margin: 0 !important;
  padding: 0 !important;
  direction: rtl;
}

/* إخفاء اسم المدونة "بلوجى" وكل ما يتعلق بالرأس تماماً */
header, #header, .header, #header-inner, .Header, #header-section, .blog-name, .titlewrapper {
  display: none !important;
  visibility: hidden !important;
  height: 0 !important;
  opacity: 0 !important;
  margin: 0 !important;
  padding: 0 !important;
}

/* إخفاء شريط التنقل العلوي للقوالب */
.nav-menu, nav, .navbar {
  display: none !important;
}

/* جعل الحاوية الرئيسية ممتدة 100% بدون أي هوامش */
.main-wrapper, .container, .main, #main, .column-center-outer {
  width: 100% !important;
  max-width: 100% !important;
  margin: 0 !important;
  padding: 0 !important;
}

/* إخفاء عناوين المقالات داخل الأكواد */
.post-title, h1.post-title, h2.post-title, .entry-title {
  display: none !important;
}

/* إخفاء أدوات بلوجر المزعجة (رسائل الحالة، الصفحات، إلخ) */
.status-msg-wrap, .blog-pager, .post-footer, .feed-links, .comments {
  display: none !important;
}

/* التأكد من أن التدوينة تملأ الشاشة */
.post, .post-body {
  width: 100% !important;
  margin: 0 !important;
  padding: 0 !important;
}

/* إخفاء السايدبار والفوتر تماماً */
aside, #sidebar, footer, .footer {
  display: none !important;
}
]]></b:skin>
</head>

<body>
  <div class='main-wrapper'>
    <b:section id='main' showaddelement='yes'>
      <b:widget id='Blog1' locked='true' title='رسائل المدونة الإلكترونية' type='Blog'>
        <b:includable id='main'>
          <b:loop values='data:posts' var='post'>
            <div class='post-body'>
              <!-- هنا سيظهر الكود الذي ستضعه أنت داخل المقالة -->
              <data:post.body/>
            </div>
          </b:loop>
        </b:includable>
      </b:widget>
    </b:section>
  </div>

  <!-- أقسام تقنية مخفية لضمان قبول القالب في بلوجر -->
  <div style='display:none;'>
    <b:section id='header-section' maxwidgets='1' showaddelement='no'/>
    <b:section id='sidebar-section' showaddelement='no'/>
  </div>
</body>
</html>
