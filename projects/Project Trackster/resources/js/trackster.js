var Trackster = {};
//api from https://www.last.fm/
const API_KEY = "73fc29e682a1acbf3b58bdd2a766f5e4";
//клик на поиск
$(document).ready(function() {
  $('#search-button').click(function() {
    //console.log('I have been click')
    // console.log($('#search-input').val());
    Trackster.searchTracksByTitle($('#search-input').val());
  });
});

Trackster.renderTracks = function(tracks) {
  var $trackList = $('#track-list');

  $trackList.empty();

  for (var trackIndex = 0; trackIndex < tracks.length; trackIndex++) {
    var track = tracks[trackIndex];
    var mediumAlbumArt = track.image[1]["#text"];
    var htmlTrackRow =
    ///песня 
      '<div class="row track">' +
      '  <div class="col-xs-1 col-xs-offset-1 play-button">' +
      '    <a href="'+ track.url + '" target="_blank">' +
      '      <i class="fa fa-play-circle-o fa-2x"></i>' +
      '    </a>' +
      '  </div>' +
      '  <div class="col-xs-4">' + track.name + '</div>' +
      '  <div class="col-xs-2">' + track.artist + '</div>' +
      '  <div class="col-xs-2"><img src="' + mediumAlbumArt + '"/></div>' +
      '  <div class="col-xs-2">' + track.listeners + '</div>' +
      '</div>';

    $trackList.append(htmlTrackRow);
    //.append Вставляет содержимое, заданное параметром, в конец каждого 
    //элемента в наборе соответствующих элементов
  }
};

Trackster.searchTracksByTitle = function(title) {
  $.ajax({
    url: 'https://ws.audioscrobbler.com/2.0/?method=track.search&track=' + title + '&api_key=' + API_KEY + '&format=json',
    success: function(response) {
      //смотреть в консоле отклик запроса
      console.log(response);
      Trackster.renderTracks(response.results.trackmatches.track);
    }
  });
};