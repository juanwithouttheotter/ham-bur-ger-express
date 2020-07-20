
$( () => {
    $('.change-devour-status').on("click", (btn) => {
        const id = $(btn.target).attr("data-id");
        const newStatus = $(btn.target).data("devoured");
        console.log(id);
        console.log(newStatus);
        const newDevourStatus = {
            devoured: newStatus
        };

        $.ajax(`/burgers/${id}`, {
            type: "PUT",
            data: newDevourStatus
        }).then( () => {
            console.log('changed status to', newStatus);
            location.reload();
        });
    });
    $('.create-form').on("submit", (event) => {
        event.preventDefault();

        const newBurger = {
            burger_name: $("#bur-ger").val().trim(),
            devoured: "0"
        };
         
        $.ajax("/burgers", {
            type: "POST",
            data: newBurger
        }).then( () => {
            console.log("Fresh off the grill!");
            location.reload();
        });
    });


});