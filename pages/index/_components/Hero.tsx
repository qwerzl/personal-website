import Socials from './Socials'
// import helloWordArr from '../hello'

export default () => {
    // const helloWord = helloWordArr[Math.floor((Math.random() * helloWordArr.length))]

    return (
        <header class="mt-12 md:mt-18 text-white">
            <h1 class="title text-5xl font-bold">
                <span class="block" id="greeting">Hello, </span>
                <span class="block mt-2">I'm qwerzl.</span>
            </h1>
            <div class="mt-6">
                <div>
                  <span><b class="font-bold">CG&CS</b> Enthusiast. </span>
                </div>
                <div class="mt-2">
                    <span>WFLA '25, Computerization '23 Leader.</span>
                </div>
                <div class="mt-2">
                    <span>Feel free to communicate with me in English; Chinese, Shanghainese, French are also welcome.</span>
                </div>
            </div>
            <Socials/>
            <script>
                {`
                var text = ["Hello,", "你好,", "Bonjour,", "侬好,"];
                var counter = 0;
                var elem = document.getElementById("greeting");
                change();
                setInterval(change, 8000);
    
                function change() {
                    elem.classList.add('hide');
                    setTimeout(function () {
                        elem.innerHTML = text[counter];
                        elem.classList.remove('hide');
                        counter++;
                        if (counter >= text.length) {
                            counter = 0;
                        }
                    }, 1500);
                }
                `}
            </script>
            <style>
                {`
                    #greeting {
                        opacity: 1;
                        transition: opacity 1.5s;
                    }
                    .hide {
                        opacity: 0 !important;
                    }
                `}
            </style>
        </header>
    )
}
