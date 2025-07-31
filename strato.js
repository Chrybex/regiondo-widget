(function() {
  // Verifica se l'URL contiene "/ticketshop-booking"
  if (window.location.pathname.includes('/ticketshop-booking')) {
    // Crea un tag <style>
    const style = document.createElement('style');
    style.innerHTML = `
      div#widgetcontainer_STRATP_cm4all_com_widgets_Embed_54507677 {
        height: 100% !important;
      }
      td#content_right_wrapper {
        display: none !important;
      }
      #content_main_wrapper,
      #content_main_wrapper .content_main,
      #content_main_wrapper div#widgetcontainer_STRATP_cm4all_com_widgets_Embed_54507677 {
        width: 100% !important;
      }
    `;
    // Inserisce lo stile nel <head>
    document.head.appendChild(style);
  }
})();
