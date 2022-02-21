<?php

declare(strict_types=1);

namespace Subreddit\Controller;

use Laminas\Mvc\Controller\AbstractActionController;
use Laminas\View\Model\ViewModel;

class SubredditController extends AbstractActionController
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