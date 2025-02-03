$(document).ready(function() {
    let player1Score = 0;
    let player2Score = 0;
    let player1Played = false;
    let player2Played = false;

    $('.playBtn').click(function() {
        const player = $(this).data('player');
        const randomNumber = Math.floor(Math.random() * 6) + 1;
        
        if (player === 1 && !player1Played) {
            player1Score = randomNumber;
            player1Played = true;
            $('#result1').text(randomNumber);
            $(this).prop('disabled', true);
        } else if (player === 2 && !player2Played) {
            player2Score = randomNumber;
            player2Played = true;
            $('#result2').text(randomNumber);
            $(this).prop('disabled', true);
        }

        if (player1Played && player2Played) {
            let message = '';
            if (player1Score > player2Score) {
                message = 'Ciyaaryahan 1 ayaa ku guuleystay ❤️';
            } else if (player2Score > player1Score) {
                message = 'Ciyaaryahan 2 ayaa ku guuleystay ❤️';
            } else {
                message = 'Waa la barbardhacay! 😊';
            }
            $('#winner').html('<h3 class="text-xl font-bold">' + message + '</h3>');
        }
    });

    $('#resetBtn').click(function() {
        player1Score = 0;
        player2Score = 0;
        player1Played = false;
        player2Played = false;
        $('#result1, #result2').text('-');
        $('.playBtn').prop('disabled', false);
        $('#winner').empty();
    });
}); 