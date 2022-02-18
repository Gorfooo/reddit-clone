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
    private $id_regra;

    /**
    * @ORM\ManyToOne(targetEntity="Reddit\Subreddit\model\Subreddit", inversedBy="id_regra")
    * @ORM\JoinColumn(name="id_subreddit", referencedColumnName="id_subreddit", nullable=false)
    */
    private $id_subreddit;

    /**
    * @ORM\Column(type="string", length=150)
    *
    * @var string
    */
    private $descricao;

    /**
     * Get idRegra.
     *
     * @return int
     */
    public function getIdRegra()
    {
        return $this->id_regra;
    }

    /**
     * Set descricao.
     *
     * @param string $descricao
     *
     * @return SubredditRegras
     */
    public function setDescricao($descricao)
    {
        $this->descricao = $descricao;

        return $this;
    }

    /**
     * Get descricao.
     *
     * @return string
     */
    public function getDescricao()
    {
        return $this->descricao;
    }

    /**
     * Set idSubreddit.
     *
     * @param \Reddit\Subreddit\model\Subreddit $idSubreddit
     *
     * @return SubredditRegras
     */
    public function setIdSubreddit(\Reddit\Subreddit\model\Subreddit $idSubreddit)
    {
        $this->id_subreddit = $idSubreddit;

        return $this;
    }

    /**
     * Get idSubreddit.
     *
     * @return \Reddit\Subreddit\model\Subreddit
     */
    public function getIdSubreddit()
    {
        return $this->id_subreddit;
    }
}
