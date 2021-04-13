$(document).ready(function() {
    $("#submit_button").click(function() {
        let add = $("#course").val();
        let codes = $("#code").val();
        let points = $("#userpoints").val();
        let score = $("#userscore").val();
        // weight for each row
        var weight = 0;
        var x = Number($("#userpoints").val());
        var y = Number($("#userscore").val());
        var weight = x * y;
        $('#weight').val(weight);

        // trials totals footer original
        $(document).ready(function() {
            $('table thead th').each(function(i) {
                calculateColumn(i);
            });
        });

        function calculateColumn(index) {
            var total = 0;
            $('table tr').each(function() {
                var value = parseInt($('td', this).eq(index).text());
                if (!isNaN(value)) {
                    total += value;
                }
            });
            $('table tfoot td').eq(index).text(total);
        };





        $("tbody").append(`
<tr>
<td>${add}</td>
<td>${codes}</td>
<td>${points}</td>
<td>${score}</td>
<td>${weight}</td>
<td> <button id="test">Delete</button> </td>
<td> <button id="change">Edit</button> </td>
</tr>
`);
        $("#course, #code, #userpoints,#userscore").val("");
        $("td #test").click(function() {
            $(this).parents("tr").remove();
        });
        // Edit trials 

        // End of trials
    });
});

// results display section
$(document).ready(function() {
    $("#cal_button").click(function() {
        let uname = $("#username").val();
        $("#view_name").text("Student name:" + " " + uname);
        let sdepart = $("#userdepart").val();
        $("#view_depart").text("Student departemnt:" + " " + sdepart);
        // Clear first two inputs
        $("#username, #userdepart").val("");

        // Total Calculations
        var tweight = 0;
        var a = Number($("#tdweight").text());
        var b = Number($("#tdpoints").text());
        var tweight = (a / (b * 100)) * 5;
        $('#view_gpa').text("Your grade point average is:" + " " + tweight.toFixed(2));
    });
});



// My additions (on focus)
$(document).ready(function() {
    $("input").focus(function() {
        $(this).css("background-color", "yellow");
    });
    $("input").blur(function() {
        $(this).css("background-color", "grey");
    });
});

// On mouse click for submit button
$(document).ready(function() {
    $("#submit_button").on({
        mouseenter: function() {
            $(this).css("background-color", "red");
        },
        mouseleave: function() {
            $(this).css("background-color", "lightblue");
        },
        click: function() {
            $(this).css("background-color", "yellow");
        }
    });
});