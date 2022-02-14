<?php
namespace Subreddit\Model;

use Doctrine\ORM\Mapping as ORM;

/**
* @ORM\Entity
* @ORM\Table(name="Subreddit_Regras")
*/
class SubredditRegras
{
    /**
    * @ORM\Id @ORM\Column(type="integer")
    * @ORM\GeneratedValue
    * @var integer
    */
    protected $id_regra;

    /**
    * @ORM\Column(type="string", length=150)
    *
    * @var string
    */
    private $descricao;
}
