/*
 * This Script is used to create a moving Ferris.
 * The amount of basket can be changed by modifying
 * the global Params.
 *
 * @date 2016-06-14
 * @author Dominik Herrmann
 */

/*
 * DECLARATION
 */

// Define Constants
const AMOUNT_OF_BASKETS = 7;

/*
 * UTIL
 */

function createImgTag(svgName) {
    return $('<object width="100%" height="100%" type="image/svg+xml" data="img/' + svgName + '.svg"></object>")');
}

/*
 * FERRIS
 */

function createBaskets(totalAmount, parentElem) {
    var space = 360 / totalAmount;
    var pos = 0;
    for (var i = 0; i < totalAmount; i++) {

        var arm = $("<div>", {class: "arm"}).appendTo(parentElem);
        // transformOrigin x:Nothing y:half Of height to center arms
        TweenLite.set(arm, {rotation: (i * space) + 90, transformOrigin: "0px 3px"});

        var pivot = $("<div>", {class: "pivot outer"}).appendTo(parentElem);
        TweenLite.set(pivot, {rotation: (i * space) + 180, transformOrigin: "9px 208px"});

        var basketDivContainer = $("<div>", {class: "basket"}).appendTo(pivot);
        createImgTag("basket").appendTo(basketDivContainer);
        TweenLite.set(basketDivContainer, {rotation: (-i * space) -180, transformOrigin: "50% top"});
    }
}

/*
 * IMPLEMENTATION
 */

// Get all Objects
var ferris = $("#ferris");
var ferriscenter = $("#ferriscenter");
var swing = $("#swing");
var timeLine = new TimelineMax({repeat: -1});

// Ferris Creation dynamic arms as param
TweenLite.set(ferriscenter, {x: 187, y: 187});
createBaskets(AMOUNT_OF_BASKETS, ferriscenter);
TweenLite.from(ferris, 1, {autoAlpha: 0});

// Ferris Rotation
timeLine.to(ferriscenter, 18, {rotation: 360, ease: "easeNone"}, 0);
timeLine.to($(".basket"), 18, {rotation: "-=360", ease: "easeNone"}, 0);

// Swing Rotation
TweenLite.set(swing, {transformOrigin: "center top", ease: "easeNone"});
timeLine.to(swing, 3, {rotation: -60}, 0);
timeLine.to(swing, 3, {rotation: 80}, 3);
timeLine.to(swing, 3, {rotation: -100}, 6);
timeLine.to(swing, 3, {rotation: 80}, 9);
timeLine.to(swing, 3, {rotation: -60}, 12);
timeLine.to(swing, 3, {rotation: 0}, 15);
timeLine.to(swing, 2, {rotation: 0}, 18);