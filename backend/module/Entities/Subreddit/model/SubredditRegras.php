<?php
namespace Reddit\Subreddit\Model;

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
    * @ORM\ManyToOne(targetEntity="Reddit\Subreddit\model\Subreddit", inversedBy="id_regra")
    * @ORM\JoinColumn(name="id_subreddit", referencedColumnName="id_subreddit", nullable=false)
    */
    protected $id_subreddit;

    /**
    * @ORM\Column(type="string", length=150)
    *
    * @var string
    */
    private $descricao;
}
