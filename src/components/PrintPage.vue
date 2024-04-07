<template>
    <iframe ref="printFrame" class="printFrame" />
</template>

<script>
export default
    {
        name: 'PrintPage',
        props:
        {
            landscape:
            {
                type: Boolean,
                default: false
            }
        },
        methods:
        {
            print(node) {
                let css = '';
                const styles = document.querySelectorAll('style');
                for (let i = 0; i < styles.length; i++) {
                    css += styles[i].innerHTML;
                }
                let sheet = '';
                const stylesheets = document.querySelectorAll('link[rel="stylesheet"]');
                for (let i = 0; i < stylesheets.length; i++) {
                    sheet += '<link rel="stylesheet" href="' + stylesheets[i].href + '">';
                }
                css +=
                    '@page { size: ' + (this.landscape ? 'landscape' : 'A4') + '; margin: 10mm; }' +
                    'html,body { overflow: visible !important; }' +
                    '.print_report.v-application { display: block; overflow: visible; }' +
                    '.print_report.v-application .v-application--wrap { display: block; }';
                const doc = this.$refs.printFrame.contentDocument;
                doc.open();
                doc.write(
                    '<!DOCTYPE html><head><meta charset="utf-8"><meta http-equiv="X-UA-Compatible" content="IE=edge"><meta name="viewport" content="width=device-width,initial-scale=1.0">' +
                    sheet +
                    '<style type="text/css">' + css + '</style></head>'
                );
                // we have to wait until the Material Design icons have been loaded before printing
                doc.write(
                    '<body onload="window.print();"><div class="v-application v-application--is-ltr theme--light print_report">' +
                    node.outerHTML +
                    '</div></body></html>'
                );
                doc.close();
            }
        }
    };
</script>

<style>
.printFrame {
    border: none;
    /* with display:none the Material Design font is unable to load fast enough before we print the Frame */
    visibility: hidden;
    position: absolute;
    top: 0;
}

@media print {
    .no_print {
        display: none;
    }

    .v-application {
        background-color: white !important;
    }
}
</style>