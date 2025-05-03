<script lang="ts">
    import logo from '$lib/assets/main_logo.svg';
</script>

<div class="w-full bg-emerald-900 p-8 rounded-3xl flex justify-center relative overflow-hidden">
    <div class="h-50 flex z-100 items-center">
        <img class="invert h-12" src={logo} alt="bidipeppercrap logo">
    </div>
    <div class="blob bg-emerald-900"></div>
    <div class="blob bg-cyan-500"></div>
    <div class="blob bg-green-300"></div>
    <div class="blob bg-yellow-500"></div>
    <div class="blob bg-amber-100"></div>
    <div class="blob bg-pink-800"></div>
    <div class="blob bg-cyan-500"></div>
    <div class="blob bg-green-300"></div>
    <div class="blob bg-amber-100"></div>
    <div class="blob bg-pink-800"></div>
    <div class="blob bg-green-500"></div>
    <div class="absolute h-full w-full backdrop-blur-3xl rounded-3xl top-0 left-0 inset-ring-2 inset-ring-white/10"></div>
</div>

<style>
    .blob {
        position: absolute;
        border-radius: 3em;
        animation: blob-gradient 15s infinite;
    }

    @keyframes blob-gradient {
        15% {
            transform: scale(1.5) translate(-100px);
        }
        30% {
            transform: scale(1) translate(-50px);
        }
        45% {
            transform: scale(1.5) translate(0px);
        }
        60% {
            transform: scale(1) translate(100px);
        }
        75% {
            transform: scale(1.5) translate(200px);
        }
        90% {
            transform: scale(1) translate(75px);
        }
    }

    div:nth-child(1 of .blob) {
        top: 0;
        right: 0;
        height: 100%;
        width: 100%;
    }
    div:nth-child(2 of .blob) {
        height: 75%;
        width: 75%;
        animation-delay: 2s;
    }
    div:nth-child(3 of .blob) {
        top: 0;
        left: 0;
        height: 35%;
        width: 50%;
    }
    div:nth-child(4 of .blob) {
        top: -50px;
        left: -50px;
        height: 75%;
        width: 25%;
        animation-delay: 2s;
    }
    div:nth-child(5 of .blob) {
        top: 0;
        height: 75%;
        width: 25%;
    }
    div:nth-child(6 of .blob) {
        height: 85%;
        bottom: -100px;
        left: -100px;
        width: 25%;
        animation-delay: 2s;
    }
    div:nth-child(7 of .blob) {
        height: 55%;
        width: 55%;
        bottom: 0;
        right: 0;
    }
    div:nth-child(8 of .blob) {
        height: 55%;
        width: 25%;
        top: 0;
        right: 0;
        animation-delay: 2s;
    }
    div:nth-child(9 of .blob) {
        height: 25%;
        width: 25%;
        bottom: 0;
        animation-delay: 3s;
    }
    div:nth-child(10 of .blob) {
        height: 25%;
        width: 35%;
        right: 0;
        animation-delay: 1s;
    }
    div:nth-child(11 of .blob) {
        height: 55%;
        width: 35%;
        left: 0;
        animation-delay: 3s;
    }
</style>