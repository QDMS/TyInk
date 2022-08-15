import React, { Component } from "react";

class GoogleAds extends Component {
  componentDidMount() {
    (window.adsbygoogle = window.adsbygoogle || []).push({});
  }

  render() {
    return (
      <ins
        className="adsbygoogle"
        style={{ display: "block" }}
        data-ad-client="ca-pub-3467727257298053"
        data-ad-slot="8075248527"
        data-ad-format="auto"
        data-full-width-responsive="true"
      ></ins>
    );
  }
}

export default GoogleAds;
