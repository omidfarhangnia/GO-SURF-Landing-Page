const surfLocations = [
    {
        cityName: "Wellington",
        countryName: "New Zealand",
        Coordinate: `45°52 S 67°29 W`,
    },
    {
        cityName: "Tokyo",
        countryName: "Japan",
        Coordinate: `42°28 N 59°36 E`,
    },
    {
        cityName: "Colombo",
        countryName: "Sri Lanka",
        Coordinate: `41°29 N 81°40 W`,
    },
    {
        cityName: "Durban",
        countryName: "South Africa",
        Coordinate: `36°04 N 136°13 E`,
    },
    {
        cityName: "Dakar",
        countryName: "Senegal",
        Coordinate: `34°00 N 81°03 W`,
    },
    {
        cityName: "Rio de Janeiro",
        countryName: "Brazil",
        Coordinate: `18°13 N 63°03 W`,
    },
    {
        cityName: "Esmeralda",
        countryName: "Cuba",
        Coordinate: `10°11 S 48°20 W`,
    },
    {
        cityName: "california",
        countryName: "america",
        Coordinate: `38°43 N 9°08 W`,
    },
    {
        cityName: "Kailua-Kona",
        countryName: "hawaii",
        Coordinate: `40°39 N 22°54 E`,
    },
];

gsap.to(".shadowOfCircle", {
    stagger: 2,
    duration: 2.5,
    ease: "power4.out",
    opacity: 0,
    attr: {
        r: 40
    },
    repeat: -1,
})


$(".world__map__svg path").on("mouseover", function(e) {
    let target = $(this);
    gsap.to(target, {
        duration: .5,
        ease: "back.out(1.7)",
        opacity: 1,
        onComplete: function() {
            gsap.set(target, {opacity: .0802455})
        }
    });
})

$(".blueCircleContainer").on("click", function() {
    let target = $(this);
    let locationId = target.attr("location-id");
    let locationData = surfLocations[locationId];

    $(".city__name").text(locationData.cityName);
    $(".country__name").text(locationData.countryName);
    $(".coordinate__for__location").text(locationData.Coordinate);
})

$(".blueCircleContainer").on("mouseover", function() {
    let target = $(this);
    let locationId = target.attr("location-id");
    let locationData = surfLocations[locationId];
})