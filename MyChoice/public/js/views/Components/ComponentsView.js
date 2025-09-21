const { View } = window.Backbone;
import FooterView from '../Components/FooterView.js';

// Đây là class ComponentsView.js
class ComponentsView extends View {
    constructor(options) {
        super(options);
        this.render();
      }
  /**
   * Render nội dung ra view
   */
  render() {
    const footerView = new FooterView();
  }
}

const componentsView = new ComponentsView();
