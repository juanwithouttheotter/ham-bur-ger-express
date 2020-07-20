
$( () => {
    $('.change-devour-status').on("click", (event) => {
        const id = $(this).data("id");
        const newStatus = $(this).data("devoured");
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