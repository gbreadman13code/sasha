$(document).ready(function () {
  let span1 = $(".services-wrap_1 span");
  let span2 = $(".services-wrap_2 span");
  let span3 = $(".services-wrap_3 span");
  let list1 = $(".services-wrap_1 ul");
  let list2 = $(".services-wrap_2 ul");
  let list3 = $(".services-wrap_3 ul");
  $(".services-wrap_1 span").click(function (e) {
    e.preventDefault();
    $(this).toggleClass("active");
    $(this).next().slideToggle();
    list2.css("display", "none");
    list3.css("display", "none");
    span2.removeClass("active");
    span3.removeClass("active");
  });
  $(".services-wrap_2 span").click(function (e) {
    e.preventDefault();
    $(this).toggleClass("active");
    $(this).next().slideToggle();
    list1.css("display", "none");
    list3.css("display", "none");
    span1.removeClass("active");
    span3.removeClass("active");
  });
  $(".services-wrap_3 span").click(function (e) {
    e.preventDefault();
    $(this).toggleClass("active");
    $(this).next().slideToggle();
    list1.css("display", "none");
    list2.css("display", "none");
    span2.removeClass("active");
    span1.removeClass("active");
  });

  function contains(arr, elem) {
    for (var i = 0; i < arr.length; i++) {
      if (arr[i] === elem) {
        console.log(true);
      }
    }
    console.log(false);
  }

  $(".services-wrap ul li").click(function (e) {
    e.preventDefault();
    $(this).toggleClass("choosen");
    let serviceText = $(".choosen a").text(); // Получаем текст выбранной услуги
    let whatsAppLink = $(".whats-app-link"); // Находим ссылку на Вотсап
    whatsAppLink.attr(
      "href",
      "https://api.whatsapp.com/send?phone=79131988918&text=Здравствуйте. Меня интересует услуга" +
        ' "' +
        serviceText +
        '". ' +
        "Сколько это будет стоить?"
    ); // Плюсуем к старому тексту в ссылке текст выбранных услуг
    $(".copy textarea").html("Здравствуйте, дядя Саша. Меня интересуют вот эти услуги: " + serviceText + ". Сколько это будет стоить?")
    $(".copy .text").html("Здравствуйте, дядя Саша. Меня интересуют вот эти услуги: " + serviceText + ". Сколько это будет стоить?")

    let textHeight = $(".copy .text").outerHeight();
    $(".copy textarea").css("height", textHeight + 20)
  });
  $(".copy textarea").click(function (e) { 
    $(".copy textarea").select();
    document.execCommand("copy");
    $(".copy .success-wrap").fadeIn(500);
    $(".copy .success-wrap").fadeOut(5000);
  });
});
