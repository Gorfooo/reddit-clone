<?php

declare(strict_types=1);

namespace Post\Controller;

use Laminas\Mvc\Controller\AbstractActionController;
use Laminas\View\Model\ViewModel;

class PostController extends AbstractActionController
{
    public function createAction()
    {
        $viewModel = new ViewModel();
        $viewModel->setVariables(array('key' => 'value'))
                  ->setTerminal(true);

        return $viewModel;
    }

    public function updateAction()
    {
        
    }
}