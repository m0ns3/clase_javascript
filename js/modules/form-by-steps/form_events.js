export default class Form_Events {

    constructor() {
        this.initPrevNextButtons();
    }

    initPrevNextButtons() {
        let $prevButton = $('.js-previous');
        let $nextButton = $('.js-next');
        
        $prevButton.click(this.previousAction.bind(this));
        $nextButton.click(this.nextAction.bind(this));
    }

    initSendFormEvent(callback) {
        let $sendForm = $('.js-sendForm');
        $sendForm.click(callback);
    }

    goToStep(step, direction = 'next') {
        // 2) Simplifica esta función para que sean menos líneas. //OTRA FUNCION?33,66,99%
        let currentStep = step.replace(/^step\-/, '');//N°
        let goToStep = '.step-';

        switch (currentStep) {
            case '1':
                goToStep += '2';
                this.progressBar(66);
                break;
            case '2':
                if ('prev' === direction) {
                    goToStep += '1';
                    this.progressBar(33);
                } else {
                    goToStep += '3';
                    this.progressBar(99);
                }
                break;
            case '3':
                goToStep += '2';
                this.progressBar(66);
                break;
            default:
                break;
        }
        return goToStep;
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
    
}
