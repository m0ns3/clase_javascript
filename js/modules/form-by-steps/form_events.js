export default class Form_Events {

    constructor() {
        this.initPrevNextButtons();
        this.initselectChild();
    }

    initPrevNextButtons() {
        let $prevButton = $('.js-previous');
        let $nextButton = $('.js-next');
        
        $prevButton.click(this.previousAction.bind(this));
        $nextButton.click(this.nextAction.bind(this));
    }

initselectChild(){
    $("#childGroupSelectUnder18").change(function(){
        let cant = $("#childGroupSelectUnder18").val();
        let cantidad = parseInt(cant);


        if (''!= cant) {
            for (let i = 0; i < cantidad; i++) {
                $('.childrenData').clone().insertAfter('.children');
            }
        }else{
            $('.childrenData').css('display', 'none');
            
        }

    });
}
    initSendFormEvent(callback) {
        let $sendForm = $('.js-sendForm');
        $sendForm.click(callback);
    }

    goToStep(step, direction = 'next') {
        // 2) Simplifica esta función para que sean menos líneas.
        let currentStep = step.replace(/^step\-/, '');
        let goToStep = '.step-';

        let dir = this.checkDirection(direction);

        if ('2' == currentStep) {
            if ('prev' == dir) {
                goToStep += '1';
                this.progressBar(33);
            } else {
                goToStep += '3';
                this.progressBar(99);
            }
        } else {
            goToStep += '2';
            this.progressBar(66);
        }
        
        return goToStep;
    }
    checkDirection(d){
        if ('prev' === d) {
            return 'prev';
        } else {
            return 'next';
        }
    }
    formStep(e){
        let $current = $(e.currentTarget);
        let $formStep = $current.parents('.form-step');
        $formStep.addClass('d-none'); 
        
        return $current, $formStep;
    }


    previousAction(evt) {
        
        let stepClass = this.formStep(evt);

        let $prevStep = $(this.goToStep(stepClass [0].classList[1], 'prev'));
        $prevStep.removeClass('d-none');
    }

    nextAction(evt) {
        // 3) ¿Se puede evitar repetir mismas líneas que en previousAction?
        
        let stepClass = this.formStep(evt);

        let $nextStep = $(this.goToStep(stepClass[0].classList[1]));
        $nextStep.removeClass('d-none');
    }


    progressBar(percent) {
        // 1) Escribir aqui como sería la lógica para incrementar la barra de porcentaje.
        let $progressBar = $('.progress-bar');
        $progressBar.css('width', percent + '%')
                    .html(percent + '%');
    }

    showChild(){
        console.log('hijos');
    }
}
