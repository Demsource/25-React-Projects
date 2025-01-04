const dummyAPIResponse = {
  showLightAndDarkMode: false,
  showTicTacToeBoard: true,
  showRandomColorGenerator: true,
  showAccordion: false,
  showTreeView: true,
  showTabs: true,
};

function featureFlagsDataServiceCall() {
  return new Promise((resolve, reject) => {
    if (dummyAPIResponse) setTimeout(resolve(dummyAPIResponse), 500);
    else reject("Error occured, please try again");
  });
}

export default featureFlagsDataServiceCall;
