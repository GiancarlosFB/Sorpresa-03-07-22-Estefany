var ImgUrl = [
  "img/0.jpg",
  "img/1.jpg",
  "img/2.jpg",
  "img/3.jpg",
  "img/4.jpg",
  "img/5.jpg",
  "img/6.jpg",
  "img/7.jpg",
  "img/8.jpg",
  "img/9.jpg",
  "img/10.jpg",
  "img/11.jpg",
  "img/12.jpg",
  "img/13.jpg",
  "img/14.jpg",
  "img/15.jpg",
  "img/16.jpg",
  "img/17.jpg",
  "img/18.jpg",
  "img/19.jpg",
  "img/20.jpg",
  "img/21.jpg",
  "img/22.jpg",
  "img/23.jpg",
  "img/24.jpg",
];
var ImgPV_T = [];
var ImgPV_L = [];
var arr = [];
var leftP = [];
var topP = [];
var body_bg = new Image();
body_bg.src = "img/body_bg.jpg";
$(body_bg).load(function () {
  var b = 0;
  var d = 0;
  var f = $(".container");
  var A = $(".content");
  var q = $(".content li");
  var a = $(".content li a");
  var i = $(".content li img");
  var w = $(".content li strong");
  var o = 0;
  var z = true;
  var t = 0;
  var C = 0;
  var h = 0;
  var y;
  var r;
  var s = 0;
  var D;
  function c() {
    b = parseInt($("body").css("height"));
    d = parseInt($("body").css("width"));
  }
  function g() {
    c();
    $(".load").css("display", "none");
    e(600);
    v(true);
    var p = setTimeout(x, 600);
  }
  $(function n() {
    var G = 0;
    var E = 0;
    var F = 0;
    var H = 0;
    var I = 0;
    for (var p = 0; p < q.length; p++) {
      arr[p] = p;
      I++;
      ImgPV_T[p] = G;
      ImgPV_L[p] = E;
      leftP[p] = F;
      topP[p] = H;
      E = E + 20;
      F = F + 25;
      if (I == 5) {
        I = 0;
        E = 0;
        F = 0;
        G = G + 20;
        H = H + 25;
      }
    }
    j(ImgUrl[0], 0);
  });
  $(function m() {
    var p = 0;
    if (o < q.length) {
      i.eq(o).attr("src", ImgUrl[o]);
      i.eq(o).load(function () {
        F++;
        var F = $(this).parent().parent("li").index();
        q.eq(F).animate({ top: ImgPV_T[F] + "%", left: ImgPV_L[F] + "%" }, 600);
        if (F == q.length - 1) {
          var E = setTimeout(g, 2000);
        }
      });
      o++;
      m();
    }
  });
  function j(H, F) {
    var I = 0;
    var E = 0;
    var G = 0;
    for (var p = 0; p < a.length; p++) {
      I++;
      a.eq(p).css("background", "url(" + H + ") " + E + "% " + G + "%");
      w.eq(p).css("background", "url(" + H + ") " + E + "% " + G + "%");
      a.eq(p).fadeIn(F);
      w.eq(p).fadeIn(F);
      E = E + 25;
      if (I == 5) {
        I = 0;
        E = 0;
        G = G + 25;
      }
    }
  }
  function v(p) {
    for (var E = 0; E < q.length; E++) {
      if (p) {
        var F = parseInt(Math.random() * 20 + 1);
      } else {
        var F = 0;
      }
      var G = Math.random();
      if (G > 0.5) {
        q.eq(E).css({
          transform: "rotate(" + F + "deg)",
          "-o-transform": "rotate(" + F + "deg)",
          "-moz-transform": "rotate(" + F + "deg)",
          "-webkit-transform": "rotate(" + F + "deg)",
        });
      } else {
        q.eq(E).css({
          transform: "rotate(" + -F + "deg)",
          "-o-transform": "rotate(" + -F + "deg)",
          "-moz-transform": "rotate(" + -F + "deg)",
          "-webkit-transform": "rotate(" + -F + "deg)",
        });
      }
    }
  }
  function x() {
    $(".content li img").animate(
      { margin: "5px", width: "150px", height: "90px" },
      300
    );
  }
  function e(J) {
    var K = parseInt((d / 100) * 80);
    var p = parseInt((b / 100) * 80);
    s = (p - p * 0.8 - 100) / 2;
    var I = parseInt(p / 2);
    width_w = K;
    height_w = p;
    var E = parseInt(K / 2);
    var F = parseInt(K - ((K / 100) * 80 + 160));
    var G = parseInt(F / 2);
    t = G;
    var H = E - G;
    r = H;
    D = I;
    $(".content li span a,.content li span strong").fadeOut(1000);
    f.animate(
      {
        width: K + "px",
        height: p + "px",
        "margin-top": -I + s + "px",
        "margin-left": -H + "px",
      },
      J,
      function () {
        if (z) {
          A.css({ width: K + "px", height: p + "px" });
        }
      }
    );
  }
  $(window).resize(function () {
    $(".left").animate({ "margin-left": "-95px" }, 400);
    $(".right").animate({ "margin-right": "-95px" }, 400);
    A.css("box-shadow", "0px 0px 0px 0px #111111");
    A.stop(true);
    z = false;
    c();
    f.stop(true);
    e(0);
    y = setTimeout(B, 300);
  });
  function B() {
    A.stop(true);
    f.stop(true);
    clearTimeout(y);
    width_w = parseInt(f.css("width"));
    height_w = parseInt(f.css("height"));
    v(true);
    A.animate(
      {
        width: width_w + "px",
        height: height_w + "px",
        "margin-top": "0px",
        "margin-left": "0px",
      },
      800,
      function () {
        x();
      }
    );
  }
  $(".content li").click(function () {
    A.stop(true);
    f.stop(true);
    clearTimeout(y);
    if (parseInt(A.css("width")) != 800) {
      var E = (height_w - 500) / 2;
      var p = (width_w - 800) / 2;
      o = $(this).index();
      $(".content li img").animate(
        { margin: "0px", width: "160px", height: "100px" },
        200,
        function () {
          A.animate(
            {
              width: "800px",
              height: "500px",
              "margin-top": E + "px",
              "margin-left": p + "px",
            },
            1000
          );
          f.animate(
            { "margin-left": -r - t + "px", "margin-top": -D + "px" },
            1000,
            function () {
              A.css({ "box-shadow": "2px 2px 6px -1px #111111" });
              $(".left").animate({ "margin-left": "0px" }, 400);
              $(".right").animate({ "margin-right": "0px" }, 400);
            }
          );
          v(false);
        }
      );
      j(ImgUrl[o], 1000);
    } else {
      $(".left").animate({ "margin-left": "-95px" }, 400);
      $(".right").animate({ "margin-right": "-95px" }, 400);
      A.css("box-shadow", "0px 0px 0px 0px #111111");
      A.animate(
        {
          width: width_w + "px",
          height: height_w + "px",
          "margin-top": "0px",
          "margin-left": "0px",
        },
        600
      );
      v(true);
      y = setTimeout(x, 600);
      $(".content li span a,.content li span strong").fadeOut(700);
      f.animate({ "margin-left": -r + "px", "margin-top": -D + s + "px" }, 600);
    }
  });
  var u = 0;
  $(".left").click(function () {
    if (o == 0) {
      o = arr.length - 1;
    } else {
      o--;
    }
    arr.sort(function () {
      return 0.5 - Math.random();
    });
    if (u == 0) {
      w.css("left", "160px");
      k();
    } else {
      a.css("left", "160px");
      k();
    }
  });
  $(".right").click(function () {
    if (o == a.length - 1) {
      o = 0;
    } else {
      o++;
    }
    arr.sort(function () {
      return 0.5 - Math.random();
    });
    if (u == 0) {
      w.css("left", "-160px");
      l();
    } else {
      a.css("left", "-160px");
      l();
    }
  });
  function l() {
    a.stop(true, true);
    w.stop(true, true);
    var G = Math.random();
    var F = 0;
    if (u == 0) {
      function p(H) {
        if (G < 0.5) {
          H = 200;
        }
        w.eq(arr[F]).css(
          "background",
          "url(" + ImgUrl[o] + ") " + leftP[arr[F]] + "% " + topP[arr[F]] + "%"
        );
        a.eq(arr[F]).animate({ left: "160px" }, H, function () {
          $(this).css("left", "-160px");
        });
        w.eq(arr[F]).animate({ left: "0px" }, H);
        F++;
        if (F < a.length) {
          if (G > 0.5) {
            p(800);
          } else {
            y = setTimeout(p, 20);
          }
        } else {
          u = 1;
        }
      }
      p(800);
    } else {
      function E(H) {
        if (G < 0.5) {
          H = 200;
        }
        a.eq(arr[F]).css(
          "background",
          "url(" + ImgUrl[o] + ") " + leftP[arr[F]] + "% " + topP[arr[F]] + "%"
        );
        w.eq(arr[F]).animate({ left: "160px" }, H, function () {
          $(this).css("left", "-160px");
        });
        a.eq(arr[F]).animate({ left: "0px" }, H);
        F++;
        if (F < a.length) {
          if (G > 0.5) {
            E(800);
          } else {
            y = setTimeout(E, 20);
          }
        } else {
          u = 0;
        }
      }
      E(800);
    }
  }
  function k() {
    a.stop(true, true);
    w.stop(true, true);
    var G = Math.random();
    var F = 0;
    if (u == 0) {
      function p(H) {
        if (G < 0.5) {
          H = 200;
        }
        w.eq(arr[F]).css(
          "background",
          "url(" + ImgUrl[o] + ") " + leftP[arr[F]] + "% " + topP[arr[F]] + "%"
        );
        a.eq(arr[F]).animate({ left: "-160px" }, H, function () {
          $(this).css("left", "160px");
        });
        w.eq(arr[F]).animate({ left: "0px" }, H);
        F++;
        if (F < a.length) {
          if (G > 0.5) {
            p(800);
          } else {
            y = setTimeout(p, 20);
          }
        } else {
          u = 1;
        }
      }
      p(800);
    } else {
      function E(H) {
        if (G < 0.5) {
          H = 200;
        }
        a.eq(arr[F]).css(
          "background",
          "url(" + ImgUrl[o] + ") " + leftP[arr[F]] + "% " + topP[arr[F]] + "%"
        );
        w.eq(arr[F]).animate({ left: "-160px" }, H, function () {
          $(this).css("left", "160px");
        });
        a.eq(arr[F]).animate({ left: "0px" }, H);
        F++;
        if (F < a.length) {
          if (G > 0.5) {
            E(800);
          } else {
            y = setTimeout(E, 20);
          }
        } else {
          u = 0;
        }
      }
      E(800);
    }
  }
});
