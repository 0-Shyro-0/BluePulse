document.addEventListener('DOMContentLoaded', function() {
    var board = Chessboard('board', 'start');
    var game = new Chess();
    function onDragStart (source, piece, position, orientation) {
        if (game.in_checkmate() === true) {
            document.getElementById('result').textContent = 'Échec et mat !';
            document.getElementById('replayButton').style.display = 'block'; // Affichez le bouton de réinitialisation
        } else if (game.in_draw() === true) {
            document.getElementById('result').textContent = 'Partie nulle !';
            document.getElementById('replayButton').style.display = 'block'; // Affichez le bouton de réinitialisation
        }
    
        if (game.in_checkmate() === true || game.in_draw() === true ||
            piece.search(/^b/) !== -1) {
            return false;
        }
    }

    var config = {
        draggable: true,
        position: 'start',
        onDragStart: onDragStart,
        onDrop: function (source, target) {
            var move = game.move({ from: source, to: target, promotion: 'q' });
            if (move !== null) {
                var fen = game.fen();
                handlePlayerMove(fen);
            }
            removeGreySquares();
            if (move === null) return 'snapback';
        },
        onMouseoverSquare: function(square, piece) {
            var moves = game.moves({ square: square, verbose: true });
            if (moves.length === 0) return;

            greySquare(square);
            moves.forEach(function(move) {
                greySquare(move.to);
            });
        },
        onMouseoutSquare: removeGreySquares,
    };
    board = Chessboard('board', config);

    function sendFEN(fen) {
        $.ajax({
            url: '/update_position',
            type: 'POST',
            contentType: 'application/json;charset=UTF-8',
            data: JSON.stringify({ fen: fen }),
            success: function(response) {
                // Mettez à jour l'interface utilisateur avec le meilleur coup
                var bestMove = response.best_move
                var elo = response.elo
                console.log(elo)
                var posdepart = bestMove[0] + bestMove[1]; // Premières deux lettres du mouvement
                var posfinale = bestMove[2] + bestMove[3]; // Dernières deux lettres du mouvement
                console.log("Posdepart:", posdepart)
                console.log("Posfinale:", posfinale)
                var move = game.move({ from: posdepart, to: posfinale, promotion: 'q' });
                console.log(move)
                board.position(game.fen())
            }
        });
    }
    
    
    function handlePlayerMove(fen) {
        console.log(fen)
        // Logique pour gérer le coup du joueur
        sendFEN(fen); // Envoyez la position FEN au backend
    }
    var eloData = {
        labels: [], // Liste des époques (temps)
        datasets: [{
          label: 'Élo de l\'IA',
          data: [], // Liste des élos correspondants
          backgroundColor: 'rgba(75, 192, 192, 0.2)',
          borderColor: 'rgba(75, 192, 192, 1)',
          borderWidth: 1
        }]
      };
      
      var ctx = document.getElementById('eloChart').getContext('2d');
      
      var eloChart = new Chart(ctx, {
        type: 'line',
        data: eloData,
        options: {
          scales: {
            x: {
              min : 0,
              max : 100000,
              ticks: {
                stepSize: 10000
              },
              type: 'linear',
              position: 'bottom'
            },
            y: {
              min: 0,
              max: 3500,
              ticks: {
                stepSize: 100
              }
            }
          }
        }
      });
      function updateEloChart(newElo, time) {
        eloData.datasets[0].data.push(newElo); // Ajoutez la nouvelle valeur Elo
        eloData.labels.push(time); // Ajoutez le moment où le calcul a été effectué
        eloChart.update(); // Mettez à jour le graphique
    }
        
      updateEloChart(200, 50)
      updateEloChart(800, 1500)
      updateEloChart(1200, 5000)
      updateEloChart(1600, 13000)
      updateEloChart(2000, 30000) 
      updateEloChart(2400, 60000) 
      updateEloChart(2800, 100000) 
});

function removeGreySquares() {
    $('#board .square-55d63').css('background', '');
}

function greySquare(square) {
    var squareEl = $('#board .square-' + square);
    var background = '#a9a9a9';
    if (squareEl.hasClass('black-3c85d') === true) {
        background = '#696969';
    }

    squareEl.css('background', background);
}


