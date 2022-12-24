// ************************ Task 0 ************************
// $(function () {
//     $.ajax({
//         url: 'https://jsonplaceholder.typicode.com/users',
//         dataType: "json",
//         success: function (list_of_users) {
//             $.each(list_of_users, function (I, user) {
//                 console.log(user);
//             });
//         }
//     });
// });

// ************************ Task 1 ************************
document.body.innerHTML += `<a class="link" href="https://cdnjs.com/libraries/jquery">link</a>`;
$(function () {
    if ($('.link').attr('href')) {
        $('.link').attr('target', '_blank')
    }
});

// ************************ Task 2 ************************
document.body.innerHTML += `
    <h2 class="head">header1</h2>
    <h2 class="head">header2 <span class="inner">inner elem1</span></h2>
    <h2>header3</h2>
    <h2 class="head">header4<span class="inner"> inner elem2</span></h2>
    <h2>header5</h2>
`;

$(function () {
    ($('.head').css('background-color', 'green'));
    ($('.inner').css('font-size', '35px'));
});

// ************************ Task 3 ************************
document.body.innerHTML += `
    <h3>header1</h3>
    <div>text1</div>
    <h3>header2</h3>
    <div>text2</div>

`;
$(function () {
    $('div').each(function (i, el) {
        const $div = $(el);
        if ($div.prev()[0].localName === 'h3') {
            $div.prev().before($div);
        }
    })    
});

// ************************ Task 4 ************************
document.body.innerHTML += `
    <form>
        <input type="checkbox" value="1">1
        <input type="checkbox" value="2">2
        <input type="checkbox" value="3">3
        <input type="checkbox" value="4">4
        <input type="checkbox" value="5">5
        <input type="checkbox" value="6">6
    </form>`;
$(function () {    
    $('input').on('click', function () {
        let $count = 0;
        $('input').each(function (i, el) {
            if ($(this).is(":checked")) {
                $count += 1;
            } 
        })
        $('input').each(function (i, el) {
            if ($count >= 3) {
                el.disabled = true;
            }
        })
    })
});