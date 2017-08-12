var app = angular.module('culturalHall');

app.service('parseService', function($http, $q){
  
  //postData method here

    this.getParseData = function(){
        return $http.get('https://api.parse.com/1/classes/VintageTemples')
            .then(function(results){
                return results;
                //return results.data.results
            });
    };

    this.getPicturesOfChristData = function(){
        return $http.get('https://api.parse.com/1/classes/POC')
            .then(function(results){
                return results;
                //return results.data.results
            });
    };

    var HomeDecorData = [
{ Medium: 'Wall Plaque', Image: 'http://www.lighthaven.net/content/images/thumbs/0010712_broomhilda_1200.jpeg', isDefault: '1', Name: 'Broomhilda', Frames: '', MPN: 'FA1007339', Price: '$45.00', Dimensions: '8 X 24', Artist: 'Darren Gygi', Distributor: 'Foundation Arts'},
{ Medium: 'Wall Plaque', Image: 'http://www.lighthaven.net/content/images/thumbs/0010713_crazy-candalynn_1200.jpeg', isDefault: '1', Name: 'Crazy Candalynn', Frames: '', MPN: 'FA1007341', Price: '$45.00', Dimensions: '8 X 24', Artist: 'Darren Gygi', Distributor: 'Foundation Arts'},
{ Medium: 'Open Edition Print', Image: 'http://www.lighthaven.net/content/images/thumbs/0046915_perfect-love-open-edition-giclee-on-paper-11-x-14_1200.jpeg', isDefault: '1', Name: 'Perfect Love Open Edition Gicl�e on Paper 11 X 14', Frames: '', MPN: 'DP500386', Price: '$24.95', Dimensions: '11 X 14', Artist: 'Del Parson', Distributor: 'Amalphi Distribution'},
{ Medium: 'Open Edition Print', Image: 'http://www.lighthaven.net/content/images/thumbs/0046918_perfect-love-open-edition-giclee-on-paper-11-x-14_1200.jpeg', isDefault: '0', Name: 'Perfect Love Open Edition Gicl�e on Paper 11 X 14', Frames: 'Frame:  REP133002-', MPN: 'DP500386FA', Price: '$124.95', Dimensions: '17 X 20', Artist: 'Del Parson', Distributor: 'Amalphi Distribution'},
{ Medium: 'Open Edition Print', Image: 'http://www.lighthaven.net/content/images/thumbs/0046919_perfect-love-open-edition-giclee-on-paper-11-x-14_1200.jpeg', isDefault: '0', Name: 'Perfect Love Open Edition Gicl�e on Paper 11 X 14', Frames: 'Frame:  REP133111-', MPN: 'DP500386FB', Price: '$124.95', Dimensions: '17 X 20', Artist: 'Del Parson', Distributor: 'Amalphi Distribution'},
{ Medium: 'Open Edition Print', Image: 'http://www.lighthaven.net/content/images/thumbs/0046920_perfect-love-open-edition-giclee-on-paper-11-x-14_1200.jpeg', isDefault: '0', Name: 'Perfect Love Open Edition Gicl�e on Paper 11 X 14', Frames: 'Frame:  REP133115-', MPN: 'DP500386FC', Price: '$124.95', Dimensions: '17 X 20', Artist: 'Del Parson', Distributor: 'Amalphi Distribution'},
{ Medium: 'Open Edition Print', Image: 'http://www.lighthaven.net/content/images/thumbs/0046921_perfect-love-open-edition-giclee-on-paper-11-x-14_1200.jpeg', isDefault: '0', Name: 'Perfect Love Open Edition Gicl�e on Paper 11 X 14', Frames: 'Frame:  REP133118-', MPN: 'DP500386FD', Price: '$124.95', Dimensions: '17 X 20', Artist: 'Del Parson', Distributor: 'Amalphi Distribution'},
{ Medium: 'Open Edition Print', Image: 'http://www.lighthaven.net/content/images/thumbs/0046922_perfect-love-open-edition-giclee-on-paper-11-x-14_1200.jpeg', isDefault: '0', Name: 'Perfect Love Open Edition Gicl�e on Paper 11 X 14', Frames: 'Frame:  REP110118-', MPN: 'DP500386FE', Price: '$124.95', Dimensions: '16 3/4 X 19 3/4', Artist: 'Del Parson', Distributor: 'Amalphi Distribution'},
{ Medium: 'Open Edition Print', Image: 'http://www.lighthaven.net/content/images/thumbs/0046923_perfect-love-open-edition-giclee-on-paper-12-x-18_1200.jpeg', isDefault: '1', Name: 'Perfect Love Open Edition Gicl�e on Paper 12 X 18', Frames: '', MPN: 'DP500638', Price: '$34.95', Dimensions: '12 X 18', Artist: 'Del Parson', Distributor: 'Amalphi Distribution'},
{ Medium: 'Open Edition Print', Image: 'http://www.lighthaven.net/content/images/thumbs/0046924_perfect-love-open-edition-giclee-on-paper-12-x-18_1200.jpeg', isDefault: '0', Name: 'Perfect Love Open Edition Gicl�e on Paper 12 X 18', Frames: 'Frame:  REP133002-', MPN: 'DP500638FA', Price: '$159.95', Dimensions: '19 X 25', Artist: 'Del Parson', Distributor: 'Amalphi Distribution'},
{ Medium: 'Open Edition Print', Image: 'http://www.lighthaven.net/content/images/thumbs/0046925_perfect-love-open-edition-giclee-on-paper-12-x-18_1200.jpeg', isDefault: '0', Name: 'Perfect Love Open Edition Gicl�e on Paper 12 X 18', Frames: 'Frame:  REP133111-', MPN: 'DP500638FB', Price: '$159.95', Dimensions: '19 X 25', Artist: 'Del Parson', Distributor: 'Amalphi Distribution'},
{ Medium: 'Open Edition Print', Image: 'http://www.lighthaven.net/content/images/thumbs/0046926_perfect-love-open-edition-giclee-on-paper-12-x-18_1200.jpeg', isDefault: '0', Name: 'Perfect Love Open Edition Gicl�e on Paper 12 X 18', Frames: 'Frame:  REP133115-', MPN: 'DP500638FC', Price: '$159.95', Dimensions: '19 X 25', Artist: 'Del Parson', Distributor: 'Amalphi Distribution'},
{ Medium: 'Open Edition Print', Image: 'http://www.lighthaven.net/content/images/thumbs/0046927_perfect-love-open-edition-giclee-on-paper-12-x-18_1200.jpeg', isDefault: '0', Name: 'Perfect Love Open Edition Gicl�e on Paper 12 X 18', Frames: 'Frame:  REP133118-', MPN: 'DP500638FD', Price: '$159.95', Dimensions: '19 X 25', Artist: 'Del Parson', Distributor: 'Amalphi Distribution'},
{ Medium: 'Open Edition Print', Image: 'http://www.lighthaven.net/content/images/thumbs/0046928_perfect-love-open-edition-giclee-on-paper-14-x-21_1200.jpeg', isDefault: '1', Name: 'Perfect Love Open Edition Gicl�e on Paper 14 X 21', Frames: '', MPN: 'DP500791', Price: '$44.95', Dimensions: '14 X 21', Artist: 'Del Parson', Distributor: 'Amalphi Distribution'},
{ Medium: 'Open Edition Print', Image: 'http://www.lighthaven.net/content/images/thumbs/0046929_perfect-love-open-edition-giclee-on-paper-14-x-21_1200.jpeg', isDefault: '0', Name: 'Perfect Love Open Edition Gicl�e on Paper 14 X 21', Frames: 'Frame:  REP140002-', MPN: 'DP500791FA', Price: '$209.95', Dimensions: '22 X 29', Artist: 'Del Parson', Distributor: 'Amalphi Distribution'},
{ Medium: 'Open Edition Print', Image: 'http://www.lighthaven.net/content/images/thumbs/0046930_perfect-love-open-edition-giclee-on-paper-14-x-21_1200.jpeg', isDefault: '0', Name: 'Perfect Love Open Edition Gicl�e on Paper 14 X 21', Frames: 'Frame:  REP140111-', MPN: 'DP500791FB', Price: '$209.95', Dimensions: '22 X 29', Artist: 'Del Parson', Distributor: 'Amalphi Distribution'},
{ Medium: 'Open Edition Print', Image: 'http://www.lighthaven.net/content/images/thumbs/0046931_perfect-love-open-edition-giclee-on-paper-14-x-21_1200.jpeg', isDefault: '0', Name: 'Perfect Love Open Edition Gicl�e on Paper 14 X 21', Frames: 'Frame:  REP140115-', MPN: 'DP500791FC', Price: '$209.95', Dimensions: '22 X 29', Artist: 'Del Parson', Distributor: 'Amalphi Distribution'},
{ Medium: 'Open Edition Print', Image: 'http://www.lighthaven.net/content/images/thumbs/0046932_perfect-love-open-edition-giclee-on-paper-14-x-21_1200.jpeg', isDefault: '0', Name: 'Perfect Love Open Edition Gicl�e on Paper 14 X 21', Frames: 'Frame:  REP140118-', MPN: 'DP500791FD', Price: '$209.95', Dimensions: '22 X 29', Artist: 'Del Parson', Distributor: 'Amalphi Distribution'},
{ Medium: 'Open Edition Print', Image: 'http://www.lighthaven.net/content/images/thumbs/0046933_perfect-love-open-edition-giclee-on-paper-14-x-21_1200.jpeg', isDefault: '0', Name: 'Perfect Love Open Edition Gicl�e on Paper 14 X 21', Frames: 'Frame:  tpm8-018-', MPN: 'DP500791FE', Price: '$139.95', Dimensions: '22 X 29', Artist: 'Del Parson', Distributor: 'Amalphi Distribution'},
{ Medium: 'Open Edition Print', Image: 'http://www.lighthaven.net/content/images/thumbs/0046934_perfect-love-open-edition-giclee-on-paper-14-x-21_1200.jpeg', isDefault: '0', Name: 'Perfect Love Open Edition Gicl�e on Paper 14 X 21', Frames: 'Frame:  L1302-W26-', MPN: 'DP500791FW', Price: '$139.95', Dimensions: '21 X 28', Artist: 'Del Parson', Distributor: 'Amalphi Distribution'},
{ Medium: 'Open Edition Print', Image: 'http://www.lighthaven.net/content/images/thumbs/0056709_perfect-love-open-edition-giclee-on-paper-14-x-21_1200.jpeg', isDefault: '0', Name: 'Perfect Love Open Edition Gicl�e on Paper 14 X 21', Frames: 'Frame:  L1302-BK112-', MPN: 'DP500791FF', Price: '$139.95', Dimensions: '21 X 28', Artist: 'Del Parson', Distributor: 'Amalphi Distribution'},
{ Medium: 'Open Edition Print', Image: 'http://www.lighthaven.net/content/images/thumbs/0046941_perfect-love-open-edition-giclee-on-paper-20-x-30_1200.jpeg', isDefault: '1', Name: 'Perfect Love Open Edition Gicl�e on Paper 20 X 30', Frames: '', MPN: 'DP500939', Price: '$120.00', Dimensions: '20 X 30', Artist: 'Del Parson', Distributor: 'Amalphi Distribution'},
{ Medium: 'Open Edition Print', Image: 'http://www.lighthaven.net/content/images/thumbs/0046942_perfect-love-open-edition-giclee-on-paper-20-x-30_1200.jpeg', isDefault: '0', Name: 'Perfect Love Open Edition Gicl�e on Paper 20 X 30', Frames: 'Frame:  REP131002-', MPN: 'DP500939FA', Price: '$379.95', Dimensions: '32 X 42', Artist: 'Del Parson', Distributor: 'Amalphi Distribution'},
{ Medium: 'Open Edition Print', Image: 'http://www.lighthaven.net/content/images/thumbs/0046945_perfect-love-open-edition-giclee-on-paper-20-x-30_1200.jpeg', isDefault: '0', Name: 'Perfect Love Open Edition Gicl�e on Paper 20 X 30', Frames: 'Frame:  REP131111-', MPN: 'DP500939FB', Price: '$379.95', Dimensions: '32 X 42', Artist: 'Del Parson', Distributor: 'Amalphi Distribution'},
{ Medium: 'Open Edition Print', Image: 'http://www.lighthaven.net/content/images/thumbs/0046944_perfect-love-open-edition-giclee-on-paper-20-x-30_1200.jpeg', isDefault: '0', Name: 'Perfect Love Open Edition Gicl�e on Paper 20 X 30', Frames: 'Frame:  REP131115-', MPN: 'DP500939FC', Price: '$379.95', Dimensions: '32 X 42', Artist: 'Del Parson', Distributor: 'Amalphi Distribution'},
{ Medium: 'Open Edition Print', Image: 'http://www.lighthaven.net/content/images/thumbs/0046946_perfect-love-open-edition-giclee-on-paper-20-x-30_1200.jpeg', isDefault: '0', Name: 'Perfect Love Open Edition Gicl�e on Paper 20 X 30', Frames: 'Frame:  REP131118-', MPN: 'DP500939FD', Price: '$379.95', Dimensions: '32 X 42', Artist: 'Del Parson', Distributor: 'Amalphi Distribution'},
{ Medium: 'Open Edition Print', Image: 'http://www.lighthaven.net/content/images/thumbs/0046947_perfect-love-open-edition-giclee-on-paper-20-x-30_1200.jpeg', isDefault: '0', Name: 'Perfect Love Open Edition Gicl�e on Paper 20 X 30', Frames: 'Frame:  TPM75-G-', MPN: 'DP500939FE', Price: '$320.00', Dimensions: '28 3/4 X 38 3/4', Artist: 'Del Parson', Distributor: 'Amalphi Distribution'},
{ Medium: 'Open Edition Print', Image: 'http://www.lighthaven.net/content/images/thumbs/0076352_perfect-love-frame-f-3025-X-4025_1200.jpeg', isDefault: '0', Name: 'Perfect Love Open Edition Gicl�e on Paper 20 X 30', Frames: ' Frame:  MA277-32 Frame:  REP130112', MPN: 'DP500939FF', Price: '$525.00', Dimensions: '30.25 X 40.25', Artist: 'Del Parson', Distributor: 'Amalphi Distribution'},
{ Medium: 'Wall Plaque', Image: 'http://www.lighthaven.net/content/images/thumbs/0057484_perfect-love_1200.jpeg', isDefault: '1', Name: 'Perfect Love Plaque 10 X 13', Frames: '', MPN: 'DP500165', Price: '$49.99', Dimensions: '10.25 X 13.25', Artist: 'Del Parson', Distributor: 'Amalphi Distribution'},
{ Medium: 'Open Edition Print', Image: 'http://www.lighthaven.net/content/images/thumbs/0046935_perfect-love-open-edition-giclee-on-paper-19-x-23_1200.jpeg', isDefault: '1', Name: 'Perfect Love Open Edition Gicl�e on Paper 19 X 23', Frames: '', MPN: 'DP1008062', Price: '$90.00', Dimensions: '19 X 23', Artist: 'Del Parson', Distributor: 'Amalphi Distribution'},
{ Medium: 'Open Edition Print', Image: 'http://www.lighthaven.net/content/images/thumbs/0046939_perfect-love-open-edition-giclee-on-paper-19-x-23_1200.jpeg', isDefault: '0', Name: 'Perfect Love Open Edition Gicl�e on Paper 19 X 23', Frames: 'Frame:  tpm8-018-', MPN: 'DP1008062FA', Price: '$199.95', Dimensions: '27 X 31', Artist: 'Del Parson', Distributor: 'Amalphi Distribution'},
{ Medium: 'Open Edition Print', Image: 'http://www.lighthaven.net/content/images/thumbs/0046940_perfect-love-open-edition-giclee-on-paper-19-x-23_1200.jpeg', isDefault: '0', Name: 'Perfect Love Open Edition Gicl�e on Paper 19 X 23', Frames: 'Frame:  REP133118-', MPN: 'DP1008062FB', Price: '$250.00', Dimensions: '25 1/4 X 29 1/4', Artist: 'Del Parson', Distributor: 'Amalphi Distribution'},
{ Medium: 'Open Edition Print', Image: 'http://www.lighthaven.net/content/images/thumbs/0046938_perfect-love-open-edition-giclee-on-paper-19-x-23_1200.jpeg', isDefault: '0', Name: 'Perfect Love Open Edition Gicl�e on Paper 19 X 23', Frames: 'Frame:  REP140118-', MPN: 'DP1008062FD', Price: '$270.00', Dimensions: '27 1/4 X 31 1/4', Artist: 'Del Parson', Distributor: 'Amalphi Distribution'},
{ Medium: 'Open Edition Print', Image: 'http://www.lighthaven.net/content/images/thumbs/0056673_perfect-love-open-edition-print-8-x-10_1200.jpeg', isDefault: '1', Name: 'Perfect Love  Open Edition Print 8 X 10', Frames: '', MPN: 'DP1009112', Price: '$9.95', Dimensions: '8 X 10', Artist: 'Del Parson', Distributor: 'Amalphi Distribution'},
{ Medium: 'Open Edition Print', Image: 'http://www.lighthaven.net/content/images/thumbs/0056674_perfect-love-open-edition-print-8-x-10_1200.jpeg', isDefault: '0', Name: 'Perfect Love  Open Edition Print 8 X 10', Frames: 'Frame:  L1302S-BK112-', MPN: 'DP1009112FA', Price: '$39.95', Dimensions: '14 X 12', Artist: 'Del Parson', Distributor: 'Amalphi Distribution'},
{ Medium: 'Open Edition Print', Image: 'http://www.lighthaven.net/content/images/thumbs/0056680_perfect-love-open-edition-print-8-x-10_1200.jpeg', isDefault: '0', Name: 'Perfect Love  Open Edition Print 8 X 10', Frames: 'Frame:  REP107002-', MPN: 'DP1009112FC', Price: '$59.95', Dimensions: '14 X 12', Artist: 'Del Parson', Distributor: 'Amalphi Distribution'},
{ Medium: 'Open Edition Print', Image: 'http://www.lighthaven.net/content/images/thumbs/0056678_perfect-love-open-edition-print-8-x-10_1200.jpeg', isDefault: '0', Name: 'Perfect Love  Open Edition Print 8 X 10', Frames: 'Frame:  L1302S-BR334-', MPN: 'DP1009112FG', Price: '$39.95', Dimensions: '14 X 12', Artist: 'Del Parson', Distributor: 'Amalphi Distribution'},
{ Medium: 'Open Edition Print', Image: 'http://www.lighthaven.net/content/images/thumbs/0056677_perfect-love-open-edition-print-8-x-10_1200.jpeg', isDefault: '0', Name: 'Perfect Love  Open Edition Print 8 X 10', Frames: 'Frame:  L1302S-W26-', MPN: 'DP1009112FL', Price: '$39.95', Dimensions: '14 X 12', Artist: 'Del Parson', Distributor: 'Amalphi Distribution'},
{ Medium: 'Open Edition Print', Image: 'http://www.lighthaven.net/content/images/thumbs/0056675_perfect-love-open-edition-print-8-x-10_1200.jpeg', isDefault: '0', Name: 'Perfect Love  Open Edition Print 8 X 10', Frames: 'Frame:  N509-14-', MPN: 'DP1009112FN', Price: '$39.95', Dimensions: '14 1/2 X 12 1/2', Artist: 'Del Parson', Distributor: 'Amalphi Distribution'},
{ Medium: 'Open Edition Print', Image: 'http://www.lighthaven.net/content/images/thumbs/0056679_perfect-love-open-edition-print-8-x-10_1200.jpeg', isDefault: '0', Name: 'Perfect Love  Open Edition Print 8 X 10', Frames: 'Frame:  REP107111-', MPN: 'DP1009112FR', Price: '$59.95', Dimensions: '14 X 12', Artist: 'Del Parson', Distributor: 'Amalphi Distribution'},
{ Medium: 'Open Edition Print', Image: 'http://www.lighthaven.net/content/images/thumbs/0056676_perfect-love-open-edition-print-8-x-10_1200.jpeg', isDefault: '0', Name: 'Perfect Love  Open Edition Print 8 X 10', Frames: 'Frame:  W8243-', MPN: 'DP1009112FW', Price: '$39.95', Dimensions: '14 1/2 X 12 1/2', Artist: 'Del Parson', Distributor: 'Amalphi Distribution'},
{ Medium: 'Open Edition Print', Image: 'http://www.lighthaven.net/content/images/thumbs/0056699_perfect-love-open-edition-print-12-x-18_1200.jpeg', isDefault: '1', Name: 'Perfect Love  Open Edition Print 12 X 18', Frames: '', MPN: 'DP1009135', Price: '$34.95', Dimensions: '12 X 18', Artist: 'Del Parson', Distributor: 'Amalphi Distribution'},
{ Medium: 'Open Edition Print', Image: 'http://www.lighthaven.net/content/images/thumbs/0056702_perfect-love-open-edition-print-12-x-18_1200.jpeg', isDefault: '0', Name: 'Perfect Love  Open Edition Print 12 X 18', Frames: 'Frame:  L1302-BK112-', MPN: 'DP1009135FA', Price: '$120.00', Dimensions: '25 X 19', Artist: 'Del Parson', Distributor: 'Amalphi Distribution'},
{ Medium: 'Open Edition Print', Image: 'http://www.lighthaven.net/content/images/thumbs/0056708_perfect-love-open-edition-print-12-x-18_1200.jpeg', isDefault: '0', Name: 'Perfect Love  Open Edition Print 12 X 18', Frames: 'Frame:  REP115111-', MPN: 'DP1009135FB', Price: '$155.00', Dimensions: '25 X 19', Artist: 'Del Parson', Distributor: 'Amalphi Distribution'},
{ Medium: 'Open Edition Print', Image: 'http://www.lighthaven.net/content/images/thumbs/0056705_perfect-love-open-edition-print-12-x-18_1200.jpeg', isDefault: '0', Name: 'Perfect Love  Open Edition Print 12 X 18', Frames: 'Frame:  REP110111-', MPN: 'DP1009135FC', Price: '$150.00', Dimensions: '24 X 18', Artist: 'Del Parson', Distributor: 'Amalphi Distribution'},
{ Medium: 'Open Edition Print', Image: 'http://www.lighthaven.net/content/images/thumbs/0056707_perfect-love-open-edition-print-12-x-18_1200.jpeg', isDefault: '0', Name: 'Perfect Love  Open Edition Print 12 X 18', Frames: 'Frame:  REP108111-', MPN: 'DP1009135FE', Price: '$185.00', Dimensions: '25 X 19', Artist: 'Del Parson', Distributor: 'Amalphi Distribution'},
{ Medium: 'Open Edition Print', Image: 'http://www.lighthaven.net/content/images/thumbs/0056703_perfect-love-open-edition-print-12-x-18_1200.jpeg', isDefault: '0', Name: 'Perfect Love  Open Edition Print 12 X 18', Frames: 'Frame:  L1302-W26-', MPN: 'DP1009135FL', Price: '$120.00', Dimensions: '25 X 19', Artist: 'Del Parson', Distributor: 'Amalphi Distribution'},
{ Medium: 'Open Edition Print', Image: 'http://www.lighthaven.net/content/images/thumbs/0056700_perfect-love-open-edition-print-12-x-18_1200.jpeg', isDefault: '0', Name: 'Perfect Love  Open Edition Print 12 X 18', Frames: 'Frame:  N509-14-', MPN: 'DP1009135FN', Price: '$99.00', Dimensions: '23 X 17', Artist: 'Del Parson', Distributor: 'Amalphi Distribution'},
{ Medium: 'Open Edition Print', Image: 'http://www.lighthaven.net/content/images/thumbs/0056706_perfect-love-open-edition-print-12-x-18_1200.jpeg', isDefault: '0', Name: 'Perfect Love  Open Edition Print 12 X 18', Frames: 'Frame:  REP107111-', MPN: 'DP1009135FS', Price: '$168.00', Dimensions: '22 X 16', Artist: 'Del Parson', Distributor: 'Amalphi Distribution'},
{ Medium: 'Open Edition Print', Image: 'http://www.lighthaven.net/content/images/thumbs/0056701_perfect-love-open-edition-print-12-x-18_1200.jpeg', isDefault: '0', Name: 'Perfect Love  Open Edition Print 12 X 18', Frames: 'Frame:  TPM13-592-', MPN: 'DP1009135FT', Price: '$110.00', Dimensions: '25 X 19', Artist: 'Del Parson', Distributor: 'Amalphi Distribution'},
{ Medium: 'Open Edition Print', Image: 'http://www.lighthaven.net/content/images/thumbs/0056704_perfect-love-open-edition-print-12-x-18_1200.jpeg', isDefault: '0', Name: 'Perfect Love  Open Edition Print 12 X 18', Frames: 'Frame:  W1023-', MPN: 'DP1009135FW', Price: '$140.00', Dimensions: '25 X 19', Artist: 'Del Parson', Distributor: 'Amalphi Distribution'},
{ Medium: 'Open Edition Print', Image: 'http://www.lighthaven.net/content/images/thumbs/0057464_perfect-love-open-edition-print-11-x-14_1200.jpeg', isDefault: '1', Name: 'Perfect Love  Open Edition Print 11 X 14', Frames: '', MPN: 'DP1010670', Price: '$24.95', Dimensions: '11 X 14', Artist: 'Del Parson', Distributor: 'Amalphi Distribution'},
{ Medium: 'Open Edition Print', Image: 'http://www.lighthaven.net/content/images/thumbs/0057465_perfect-love-open-edition-print-11-x-14_1200.jpeg', isDefault: '0', Name: 'Perfect Love  Open Edition Print 11 X 14', Frames: 'Frame:  REP133002-', MPN: 'DP1010670FA', Price: '$124.95', Dimensions: '20 X 17', Artist: 'Del Parson', Distributor: 'Amalphi Distribution'},
{ Medium: 'Open Edition Print', Image: 'http://www.lighthaven.net/content/images/thumbs/0057466_perfect-love-open-edition-print-11-x-14_1200.jpeg', isDefault: '0', Name: 'Perfect Love  Open Edition Print 11 X 14', Frames: 'Frame:  REP133111-', MPN: 'DP1010670FB', Price: '$124.95', Dimensions: '20 X 17', Artist: 'Del Parson', Distributor: 'Amalphi Distribution'},
{ Medium: 'Open Edition Print', Image: 'http://www.lighthaven.net/content/images/thumbs/0057467_perfect-love-open-edition-print-11-x-14_1200.jpeg', isDefault: '0', Name: 'Perfect Love  Open Edition Print 11 X 14', Frames: 'Frame:  REP133115-', MPN: 'DP1010670FC', Price: '$124.95', Dimensions: '20 X 17', Artist: 'Del Parson', Distributor: 'Amalphi Distribution'},
{ Medium: 'Open Edition Print', Image: 'http://www.lighthaven.net/content/images/thumbs/0057468_perfect-love-open-edition-print-11-x-14_1200.jpeg', isDefault: '0', Name: 'Perfect Love  Open Edition Print 11 X 14', Frames: 'Frame:  REP133118-', MPN: 'DP1010670FD', Price: '$124.95', Dimensions: '20 X 17', Artist: 'Del Parson', Distributor: 'Amalphi Distribution'},
{ Medium: 'Open Edition Print', Image: 'http://www.lighthaven.net/content/images/thumbs/0057469_perfect-love-open-edition-print-14-x-21_1200.jpeg', isDefault: '1', Name: 'Perfect Love  Open Edition Print 14 X 21', Frames: '', MPN: 'DP1010671', Price: '$44.95', Dimensions: '14 X 21', Artist: 'Del Parson', Distributor: 'Amalphi Distribution'},
{ Medium: 'Open Edition Print', Image: 'http://www.lighthaven.net/content/images/thumbs/0057470_perfect-love-open-edition-print-14-x-21_1200.jpeg', isDefault: '0', Name: 'Perfect Love  Open Edition Print 14 X 21', Frames: 'Frame:  REP140002-', MPN: 'DP1010671FA', Price: '$209.95', Dimensions: '29 X 22', Artist: 'Del Parson', Distributor: 'Amalphi Distribution'},
{ Medium: 'Open Edition Print', Image: 'http://www.lighthaven.net/content/images/thumbs/0057471_perfect-love-open-edition-print-14-x-21_1200.jpeg', isDefault: '0', Name: 'Perfect Love  Open Edition Print 14 X 21', Frames: 'Frame:  REP140111-', MPN: 'DP1010671FB', Price: '$209.95', Dimensions: '29 X 22', Artist: 'Del Parson', Distributor: 'Amalphi Distribution'},
{ Medium: 'Open Edition Print', Image: 'http://www.lighthaven.net/content/images/thumbs/0057472_perfect-love-open-edition-print-14-x-21_1200.jpeg', isDefault: '0', Name: 'Perfect Love  Open Edition Print 14 X 21', Frames: 'Frame:  REP140115-', MPN: 'DP1010671FC', Price: '$209.95', Dimensions: '29 X 22', Artist: 'Del Parson', Distributor: 'Amalphi Distribution'},
{ Medium: 'Open Edition Print', Image: 'http://www.lighthaven.net/content/images/thumbs/0057473_perfect-love-open-edition-print-14-x-21_1200.jpeg', isDefault: '0', Name: 'Perfect Love  Open Edition Print 14 X 21', Frames: 'Frame:  REP140118-', MPN: 'DP1010671FD', Price: '$209.95', Dimensions: '29 X 22', Artist: 'Del Parson', Distributor: 'Amalphi Distribution'},
{ Medium: 'Open Edition Print', Image: 'http://www.lighthaven.net/content/images/thumbs/0057474_perfect-love-open-edition-print-20-x-30_1200.jpeg', isDefault: '1', Name: 'Perfect Love  Open Edition Print 20 X 30', Frames: '', MPN: 'DP1010674', Price: '$120.00', Dimensions: '20 X 30', Artist: 'Del Parson', Distributor: 'Amalphi Distribution'},
{ Medium: 'Open Edition Print', Image: 'http://www.lighthaven.net/content/images/thumbs/0057480_perfect-love-open-edition-print-20-x-30_1200.jpeg', isDefault: '0', Name: 'Perfect Love  Open Edition Print 20 X 30', Frames: 'Frame:  REP131002-', MPN: 'DP1010674FA', Price: '$379.95', Dimensions: '42 X 32', Artist: 'Del Parson', Distributor: 'Amalphi Distribution'},
{ Medium: 'Open Edition Print', Image: 'http://www.lighthaven.net/content/images/thumbs/0057481_perfect-love-open-edition-print-20-x-30_1200.jpeg', isDefault: '0', Name: 'Perfect Love  Open Edition Print 20 X 30', Frames: 'Frame:  REP131111-', MPN: 'DP1010674FB', Price: '$379.95', Dimensions: '42 X 32', Artist: 'Del Parson', Distributor: 'Amalphi Distribution'},
{ Medium: 'Open Edition Print', Image: 'http://www.lighthaven.net/content/images/thumbs/0057482_perfect-love-open-edition-print-20-x-30_1200.jpeg', isDefault: '0', Name: 'Perfect Love  Open Edition Print 20 X 30', Frames: 'Frame:  REP131115-', MPN: 'DP1010674FC', Price: '$379.95', Dimensions: '42 X 32', Artist: 'Del Parson', Distributor: 'Amalphi Distribution'},
{ Medium: 'Open Edition Print', Image: 'http://www.lighthaven.net/content/images/thumbs/0057483_perfect-love-open-edition-print-20-x-30_1200.jpeg', isDefault: '0', Name: 'Perfect Love  Open Edition Print 20 X 30', Frames: 'Frame:  REP131118-', MPN: 'DP1010674FD', Price: '$379.95', Dimensions: '42 X 32', Artist: 'Del Parson', Distributor: 'Amalphi Distribution'},
{ Medium: 'Open Edition Print', Image: 'http://www.lighthaven.net/content/images/thumbs/0076351_perfect-love-open-edition-print-20-x-30_1200.jpeg', isDefault: '0', Name: 'Perfect Love  Open Edition Print 20 X 30', Frames: ' Frame:  MA277-32 Frame:  REP130112', MPN: 'DP1010674FF', Price: '$525.00', Dimensions: '30.25 X 40.25', Artist: 'Del Parson', Distributor: 'Amalphi Distribution'},
{ Medium: 'Open Edition Print', Image: 'http://www.lighthaven.net/content/images/thumbs/0082559_perfect-love-open-edition-print-20-x-30_1200.jpeg', isDefault: '0', Name: 'Perfect Love  Open Edition Print 20 X 30', Frames: ' Frame:  REP103115', MPN: 'DP1010674FW', Price: '$345.00', Dimensions: '39 X 29', Artist: 'Del Parson', Distributor: 'Amalphi Distribution'},
{ Medium: 'Open Edition Print', Image: 'http://www.lighthaven.net/content/images/thumbs/0060241_perfect-love-open-edition-print-11-34-x-17-12_1200.jpeg', isDefault: '1', Name: 'Perfect Love  Open Edition Print 11 3/4 X 17 1/2', Frames: '', MPN: 'DP1010988', Price: '$29.95', Dimensions: '11.75 X 17.5', Artist: 'Del Parson', Distributor: 'Amalphi Distribution'},
{ Medium: 'Open Edition Print', Image: 'http://www.lighthaven.net/content/images/thumbs/0060243_perfect-love-open-edition-print-11-34-x-17-12_1200.jpeg', isDefault: '0', Name: 'Perfect Love  Open Edition Print 11 3/4 X 17 1/2', Frames: ' Frame:  L1302-W26', MPN: 'DP1010988FDB', Price: '$130.00', Dimensions: '18.75 X 24.5', Artist: 'Del Parson', Distributor: 'Amalphi Distribution'},
];


this.getHomeDecorData = function(){
    return HomeDecorData;
}
    this.getVariantData = function(obj, table){
        var defer = $q.defer();
        Parse.initialize("KE8IkvnyIEYnV6kdxgnlT8nyK1GVrP8OXSzIlPkn", "49KjJV6PpRAnzsHeFf8VbTVxDvKpd4eBdhQUffuo");
        var variants = Parse.Object.extend(table);
        var query = new Parse.Query(variants);
        query.startsWith("Name", obj.Name);
        query.equalTo("isDefault", 1);
        query.find({
            success: function(results) {
                defer.resolve(results);
             },
            error: function(error) {
                //alert("Error: " + error.code + " " + error.message);
            }

        });
        return defer.promise;
    };

    this.getFramedData = function(obj, table){
        var defer = $q.defer();
        Parse.initialize("KE8IkvnyIEYnV6kdxgnlT8nyK1GVrP8OXSzIlPkn", "49KjJV6PpRAnzsHeFf8VbTVxDvKpd4eBdhQUffuo");
        var variants = Parse.Object.extend(table);
        var query = new Parse.Query(variants);
        query.equalTo("ProductID", obj.ProductID);
        query.equalTo("isDefault", 0);
        query.find({
            success: function(results) {
                defer.resolve(results);
            },
            error: function(error) {
                //alert("Error: " + error.code + " " + error.message);
            }

        });
        return defer.promise;
    };


    this.getShowData = function(productid){
        return $http.get('https://api.parse.com/1/classes/Shows')
            .then(function(results){
                return results;
                //return results.data.results
            });
    };

    this.postShowData = function(obj){
        return $http({
            method: 'POST',
            url: 'https://api.parse.com/1/classes/Shows',
            data: obj
        }).then(function(){
        return obj});
    };

    this.updateData = function(obj){
        debugger;
        return $http({
            method: 'PUT',
            url: 'https://api.parse.com/1/classes/Shows/' + obj.objectId,
            data: obj
        }).then(function(){
            return obj});
    };

    this.deleteData = function(obj){
        debugger;
        return $http.delete('https://api.parse.com/1/classes/Shows/' + obj.objectId).then(function(){
            return obj
        });
    };

    this.getData = function(){
        return $http.get('https://api.parse.com/1/classes/Shows')
            .then(function(results){
                return results.data.results
            });
    };


})

//  this.getParseData = function() {
//  Parse.initialize("KE8IkvnyIEYnV6kdxgnlT8nyK1GVrP8OXSzIlPkn", "49KjJV6PpRAnzsHeFf8VbTVxDvKpd4eBdhQUffuo");
//  var vintageTemples = Parse.Object.extend("VintageTemples")
//  var queryObject = new Parse.Query(vintageTemples)
//  queryObject.limit(1000)
//  return queryObject.find({
//    success: function (results) {
//    var myArray = results.map(function(temple){
//      return{
//        name: temple.attributes.Name,
//        img: temple.attributes.Image
//      }
//    })
//    return myArray
//    },
//    error: function (error) {
//    debugger;
//      alert("Error: " + error.code + " " + error.message);
//  }  });
//}
//

