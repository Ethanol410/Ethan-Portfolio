/* création d'une animation "flash" */
@keyframes flash{
    0%{
        color: #fff900;
        text-shadow: 0 0 7px #fff900 ;
    }

    90%{
        color: #484848;
        text-shadow: none;
    }

    100%{
        color: #fff900;
        text-shadow: 0 0 7px #fff900 ;
    }
}