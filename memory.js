

function startGame() {

    var playerNames = ["Marco", "Simone", "Sjoerd"];
    var cardNames = ["Appel", "Banaan"];
    return new MemoryGame(playerNames, cardNames);
}

function Player(nameOfThePlayer) {
    var name = nameOfThePlayer;
    this.getName = function () {
        return name;
    }
}


function Card(nameOfCard) {
    var name = nameOfCard;
    this.getCardName = function() {
        return name;
    };
}

function Position(nameOfCard) {
    var card = new Card(nameOfCard);
    var occupied = true;
    var visible = false;
    this.isOccupied = function () {
        return occupied;
    };

    this.isVisible = function () {
      return visible;
    };
    this.getDisplay = function () {
        if (this.isOccupied()) {
            if (this.isVisible()) {
                return card.getCardName();
            } else {
                return "ACHTERKANT";
            }
        } else {
            return "BLANCO";
        }
    };

}

function MemoryGame(playerNames, cardNames) {

    this.createPositions = function (cardNames) {
        var positions = [];
        for (var i = 0 ; i < cardNames.length ; i++) {
            positions.push(new Position(cardNames[i]));
            positions.push(new Position(cardNames[i]));
        }
        return positions;
    };

    this.createPlayers = function (playerNames) {
        var players = [];
        for (var i = 0 ; i <= playerNames.length ; i++) {
            players.push(new Player(playerNames[i]));
        }
        return players;
    };

    var players = this.createPlayers(playerNames);
    var positions = this.createPositions(cardNames);

    var activePlayerIndex = 0;

    this.getActivePlayer = function() {
        return players[activePlayerIndex].getName();
    };

    this.getBoard = function() {
        var positionStatus = [];
        for (var i = 0; i < positions.length ; i++) {
            positionStatus.push(positions[i].getDisplay())
        }

        return positionStatus;
    };


}
